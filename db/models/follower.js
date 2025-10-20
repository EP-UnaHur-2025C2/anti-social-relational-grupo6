'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Followers extends Model {

    static associate(models) {
      Followers.belongsTo(models.Users, {
        foreignKey: 'follower_nickname',
        as: 'follower'
      });

      Followers.belongsTo(models.Users, {
        foreignKey: 'followed_nickname',
        as: 'followed'
      });
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