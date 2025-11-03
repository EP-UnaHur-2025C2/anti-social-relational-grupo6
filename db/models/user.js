'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    static associate(models) {
      // Un usuario crea muchos posts
      Users.hasMany(models.Post, {
        foreignKey: 'nickName',
        as: 'posts'
      });

      // Un usuario escribe muchos comentarios
      Users.hasMany(models.Comment, {
        foreignKey: 'nickName',
        as: 'comments'
      });

      Users.belongsToMany(Users, {
        through: models.Follower,
        as: 'followers',
        foreignKey: 'followed_nickname',
        otherKey: 'follower_nickname'
      });

      Users.belongsToMany(Users, {
        through: models.Follower,
        as: 'following',
        foreignKey: 'follower_nickname',
        otherKey: 'followed_nickname'
      });
    }
  }
  Users.init({
    nickName: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    modelName: 'Users',
    tableName: 'Users',
  });
  return Users;
};