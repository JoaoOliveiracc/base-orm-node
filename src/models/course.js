'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    static associate(models) {
      Course.belongsTo(models.Category, {
        foreignKey: 'category_id'
      });
      Course.belongsTo(models.User, {
        foreignKey: 'teacher_id'
      });
      Course.belongsTo(models.Registration, {
        foreignKey: 'course_id'
      });
    }
  }
  Course.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    init_date: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Course',
    tableName: 'courses'
  });
  return Course;
};