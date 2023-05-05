'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Voter extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Voter.init({
    name: DataTypes.STRING,
    booth: DataTypes.NUMBER,
    epic: DataTypes.STRING,
    house: DataTypes.STRING,
    voted: DataTypes.BOOLEAN,
    voted_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Voter',
  });
  return Voter;
};