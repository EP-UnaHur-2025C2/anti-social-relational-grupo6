'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Followers extends Model {
 
    static associate(models) {
      
    }
  }
  Followers.init({
    follower_nickname: DataTypes.STRING,
    followed_nickname: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Follower',
  });
  return Followers;
};