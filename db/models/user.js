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
  });
  return Users;
};