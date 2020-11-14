
export default (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        key: DataTypes.STRING,
        phone: DataTypes.STRING
    }, {
            timestamps: true,
            paranoid: true,
        });
    User.associate = function (models) {
        models.User.hasMany(models.Sms, {foreignKey: 'userId'});/* 
        // models.User.belongsTo(models.UserFriend, {foreignKey: 'friendId'}); */
    };
    return User;
};