'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Todo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Todo.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user'
      })
      Todo.belongsTo(models.Status, {
        foreignKey: 'statusId',
        as: 'status'
      })
    }
  };
  Todo.init({
    title: DataTypes.STRING,
    excerpt: DataTypes.STRING,
    description: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    statusId: DataTypes.INTEGER
  }, {
    sequelize,
    timestamps: true,
    modelName: 'Todo',
  });
  return Todo;
};