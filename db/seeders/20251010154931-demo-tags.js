'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Tags', [
      {
        name: 'javascript',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'nodejs',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'react',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'sequelize',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'desarrollo-web',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'base-de-datos',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'programacion',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'tutorial',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'tecnologia',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'backend',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Tags', null, {});
  }
};
