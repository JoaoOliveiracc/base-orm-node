'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Course, {
        foreignKey: 'teacher_id'
      });
      User.hasMany(models.Registration, {
        foreignKey: 'student_id'
      });
    }
  }
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    cpf: DataTypes.STRING,
    ativo: DataTypes.BOOLEAN,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users'
  });
  return User;
};