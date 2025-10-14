'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {

    static associate(models) {
      // Un comentario pertenece a un post
      Comment.belongsTo(models.Post, {
        foreignKey: 'postId',
        as: 'post'
      });

      // Un comentario pertenece a un usuario
      Comment.belongsTo(models.Users, {
        foreignKey: 'nickName',
        as: 'author'
      });
    }
  }
  Comment.init({
    body: DataTypes.TEXT,
    visible: DataTypes.BOOLEAN,
    postId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    nickName: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};