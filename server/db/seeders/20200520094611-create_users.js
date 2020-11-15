'use strict';
var crypto = require('crypto')
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Users', [{
			firstName: 'Shivam',
			lastName: 'Krishna',
			phone: '+917217667317',
			key:  crypto.randomBytes(40).toString('hex'),
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			firstName: 'James',
			lastName: 'Bond',
			phone: '+917217667317',
			key:  crypto.randomBytes(40).toString('hex'),
			createdAt: new Date(),
			updatedAt: new Date()
		}], {});
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Users', { id : [1,2] }, {});
	}
};
