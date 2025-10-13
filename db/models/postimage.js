'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PostImage extends Model {

    static associate(models) {
      // Una imagen pertenece a un post
      PostImage.belongsTo(models.Post, {
        foreignKey: 'postId',
        as: 'post'
      });
    }
  }
  PostImage.init({
    imageUrl: DataTypes.STRING,
    postId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'PostImage',
  });
  return PostImage;
};