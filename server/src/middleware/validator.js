import BaseJoi from 'joi';
import DateExtension from 'joi-date-extensions';
const Joi = BaseJoi.extend(DateExtension);

export var validateBody = (schema) => {
	return (req, res, next) => {
		const result = req.method != 'GET' ? Joi.validate(req.body, schema) : Joi.validate(req.query, schema);
		if (result.error) {
			return res.status(400).json(result.error);
		}

		if (!req.value) {
			req.value = {};
		}
		req.value['body'] = result.value;
		next();
	}
}

export var schemas = {
	sendMessage: Joi.object().keys({
        message: Joi.string().required().min(8).max(150).error((err) => {
			return 'Message has to be between 8 to 150 characters.'
		})
    })
}