'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    title: {
      allowNull: false,
      type: DataTypes.STRING
    },
    content: DataTypes.TEXT
  }, {});

  Post.associate = function(models) {
    // associations can be defined here
    Recipe.belongsTo(models.Author, { foreignKey: 'authorId' })
  };

  return Post;
};