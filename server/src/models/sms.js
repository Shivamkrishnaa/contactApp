export default (sequelize, DataTypes) => {
    const Sms = sequelize.define('Sms', {
        userId: DataTypes.INTEGER,
        body: DataTypes.TEXT,
        status: DataTypes.STRING,
        otp: DataTypes.STRING,
        sentAt: DataTypes.DATE,
        key: DataTypes.STRING
    }, {
            timestamps: true,
            paranoid: true,
    });
    Sms.associate = function (models) {
        models.Sms.belongsTo(models.User, { foreignKey: 'userId' });
    };
    return Sms;
};