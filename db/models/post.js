'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Un post pertenece a un usuario
      Post.belongsTo(models.Users, {
        foreignKey: 'userId',
        as: 'author'
      });

      // Un post tiene muchas imágenes
      Post.hasMany(models.PostImage, {
        foreignKey: 'postId',
        as: 'images'
      });

      // Un post recibe muchos comentarios
      Post.hasMany(models.Comment, {
        foreignKey: 'postId',
        as: 'comments'
      });

      // Un post tiene muchos tags (relación Many-to-Many)
      Post.belongsToMany(models.Tag, {
        through: 'PostTag',
        foreignKey: 'postId',
        otherKey: 'tagId',
        as: 'tags'
      });
    }
  }
  Post.init({
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};