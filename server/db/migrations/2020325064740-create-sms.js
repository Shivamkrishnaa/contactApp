'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('Sms', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			userId: {
				type: Sequelize.INTEGER,
				references: {
					model: 'Users',
					key: 'id'
				}
			},
			body: {
				type: Sequelize.TEXT
			},
			status: {
					type: Sequelize.ENUM("initiated", "success", "failed"),
					defaultValue: "initiated"
			},
			otp: {
				type: Sequelize.STRING
			},
			sentAt: {
				allowNull: true,
				type: Sequelize.DATE
			},
			key: {
				type: Sequelize.STRING
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			deletedAt: {
				type: Sequelize.DATE
			}
		});
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('Sms');
	}
};