'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Posts', [
      {
        description: 'Mi primer post en la red social!',
        nickName: "alice_wonder",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: 'Explorando nuevas tecnologías con Node.js y Sequelize',
        nickName: "bob_builder",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: 'Un hermoso día para programar',
        nickName: "charlie_brown",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: 'Compartiendo conocimiento con la comunidad',
        nickName: "diana_prince",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: 'Trabajando en un proyecto increíble ',
        nickName: "edward_stark",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Posts', null, {});
  }
};
