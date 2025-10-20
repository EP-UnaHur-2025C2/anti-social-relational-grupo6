'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Followers', [
      {
        follower_nickname: 'alice_wonder',
        followed_nickname: 'bob_builder',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        follower_nickname: 'alice_wonder',
        followed_nickname: 'charlie_brown',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        follower_nickname: 'alice_wonder',
        followed_nickname: 'diana_prince',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // bob_builder sigue a alice y diana
      {
        follower_nickname: 'bob_builder',
        followed_nickname: 'alice_wonder',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        follower_nickname: 'bob_builder',
        followed_nickname: 'diana_prince',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        follower_nickname: 'charlie_brown',
        followed_nickname: 'alice_wonder',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        follower_nickname: 'charlie_brown',
        followed_nickname: 'bob_builder',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        follower_nickname: 'charlie_brown',
        followed_nickname: 'diana_prince',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        follower_nickname: 'charlie_brown',
        followed_nickname: 'edward_stark',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // diana_prince sigue a bob y edward
      {
        follower_nickname: 'diana_prince',
        followed_nickname: 'bob_builder',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        follower_nickname: 'diana_prince',
        followed_nickname: 'edward_stark',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        follower_nickname: 'edward_stark',
        followed_nickname: 'alice_wonder',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        follower_nickname: 'edward_stark',
        followed_nickname: 'bob_builder',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        follower_nickname: 'edward_stark',
        followed_nickname: 'charlie_brown',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        follower_nickname: 'edward_stark',
        followed_nickname: 'diana_prince',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Followers', null, {});
  }
};


