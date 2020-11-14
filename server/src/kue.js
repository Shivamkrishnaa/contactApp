import kue from 'kue';
import contact from './contact.json';
import { db } from './models';
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

export var queue = kue.createQueue();

export default {
    init: () => {

        queue.process('send', (job, done) => {
            console.log(job.data);
            client.messages
                .create({ body: `${job.data.message} ${job.data.otp}.`, from: '+12185495004', to: job.data.to })
                .then(message => {
                    return db.Sms.update({
                        sentAt: Date.now(),
                        status: 'success',
                        body: job.data.message
                    }, {
                        where: {
                            id: job.data.id
                        }
                    })
                })
                .then(message => {
                    done()
                })
                .catch(e => {
                    db.Sms.update({
                        sentAt: Date.now(),
                        status: 'failed',
                        body: job.data.message
                    }, {
                        where: {
                            id: job.data.id
                        }
                    })
                    console.log(e); done();
                });

        })

    }
}