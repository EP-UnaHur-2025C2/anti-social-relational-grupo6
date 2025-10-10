'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Posts', [
      {
        description: 'Mi primer post en la red social!',
        userId: 1, // alice_wonder
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: 'Explorando nuevas tecnologías con Node.js y Sequelize',
        userId: 2, // bob_builder
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: 'Un hermoso día para programar',
        userId: 3, // charlie_brown
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: 'Compartiendo conocimiento con la comunidad',
        userId: 4, // diana_prince
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: 'Trabajando en un proyecto increíble ',
        userId: 5, // edward_stark
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Posts', null, {});
  }
};
