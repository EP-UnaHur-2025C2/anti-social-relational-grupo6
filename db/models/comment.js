'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {

    static associate(models) {
      Comment.belongsTo(models.Post, {
        foreignKey: 'postId',
        as: 'post'
      });

      Comment.belongsTo(models.Users, {
        foreignKey: 'userId',
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
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};