'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Followers', [
      // alice_wonder sigue a bob, charlie y diana
      {
        follower_nickname: 'alice_wonder',
        followed_nickname: 'bob_builder',

      },
      {
        follower_nickname: 'alice_wonder',
        followed_nickname: 'charlie_brown',

      },
      {
        follower_nickname: 'alice_wonder',
        followed_nickname: 'diana_prince',
  
      },

      // bob_builder sigue a alice y diana
      {
        follower_nickname: 'bob_builder',
        followed_nickname: 'alice_wonder',

      },
      {
        follower_nickname: 'bob_builder',
        followed_nickname: 'diana_prince',

      },

      // charlie_brown sigue a todos menos a él mismo
      {
        follower_nickname: 'charlie_brown',
        followed_nickname: 'alice_wonder',

      },
      {
        follower_nickname: 'charlie_brown',
        followed_nickname: 'bob_builder',

      },
      {
        follower_nickname: 'charlie_brown',
        followed_nickname: 'diana_prince',

      },
      {
        follower_nickname: 'charlie_brown',
        followed_nickname: 'edward_stark',

      },

      // diana_prince sigue a bob y edward
      {
        follower_nickname: 'diana_prince',
        followed_nickname: 'bob_builder',

      },
      {
        follower_nickname: 'diana_prince',
        followed_nickname: 'edward_stark',

      },

      // edward_stark sigue a todos menos a él mismo
      {
        follower_nickname: 'edward_stark',
        followed_nickname: 'alice_wonder',

      },
      {
        follower_nickname: 'edward_stark',
        followed_nickname: 'bob_builder',

      },
      {
        follower_nickname: 'edward_stark',
        followed_nickname: 'charlie_brown',

      },
      {
        follower_nickname: 'edward_stark',
        followed_nickname: 'diana_prince',

      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Followers', null, {});
  }
};


