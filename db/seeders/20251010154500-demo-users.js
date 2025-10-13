'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        nickName: 'alice_wonder',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nickName: 'bob_builder',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nickName: 'charlie_brown',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nickName: 'diana_prince',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nickName: 'edward_stark',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
