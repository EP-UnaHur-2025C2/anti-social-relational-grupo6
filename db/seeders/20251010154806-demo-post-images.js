'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('PostImages', [
      {
        imageUrl: 'https://picsum.photos/800/600?random=1',
        postId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        imageUrl: 'https://picsum.photos/800/600?random=2',
        postId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        imageUrl: 'https://picsum.photos/800/600?random=3',
        postId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        imageUrl: 'https://picsum.photos/800/600?random=4',
        postId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        imageUrl: 'https://picsum.photos/800/600?random=5',
        postId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        imageUrl: 'https://picsum.photos/800/600?random=6',
        postId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        imageUrl: 'https://picsum.photos/800/600?random=7',
        postId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('PostImages', null, {});
  }
};
