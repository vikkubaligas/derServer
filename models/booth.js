'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Booth extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Booth.init({
    name: DataTypes.STRING,
    booth: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'Booth',
  });
  return Booth;
};