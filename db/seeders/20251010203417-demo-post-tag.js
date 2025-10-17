'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('PostTags', [
      // Post 1 (alice) - javascript, nodejs, programacion
      { postId: 1, tagId: 1, createdAt: new Date(), updatedAt: new Date() },
      { postId: 1, tagId: 2, createdAt: new Date(), updatedAt: new Date() },
      { postId: 1, tagId: 7, createdAt: new Date(), updatedAt: new Date() },

      // Post 2 (bob) - nodejs, sequelize, base-de-datos
      { postId: 2, tagId: 2, createdAt: new Date(), updatedAt: new Date() },
      { postId: 2, tagId: 4, createdAt: new Date(), updatedAt: new Date() },
      { postId: 2, tagId: 6, createdAt: new Date(), updatedAt: new Date() },

      // Post 3 (charlie) - javascript, programacion, tecnologia
      { postId: 3, tagId: 1, createdAt: new Date(), updatedAt: new Date() },
      { postId: 3, tagId: 7, createdAt: new Date(), updatedAt: new Date() },
      { postId: 3, tagId: 9, createdAt: new Date(), updatedAt: new Date() },

      // Post 4 (diana) - desarrollo-web, tutorial, tecnologia
      { postId: 4, tagId: 5, createdAt: new Date(), updatedAt: new Date() },
      { postId: 4, tagId: 8, createdAt: new Date(), updatedAt: new Date() },
      { postId: 4, tagId: 9, createdAt: new Date(), updatedAt: new Date() },

      // Post 5 (edward) - nodejs, backend, desarrollo-web
      { postId: 5, tagId: 2, createdAt: new Date(), updatedAt: new Date() },
      { postId: 5, tagId: 10, createdAt: new Date(), updatedAt: new Date() },
      { postId: 5, tagId: 5, createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('PostTags', null, {});
  }
};
