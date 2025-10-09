'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
       nickName: 'John Doe',
       createdAt: new Date(),
        updatedAt: new Date()
      },
      {nickName: 'John Doe2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {nickName: 'John Doe3',
        createdAt: new Date(),
        updatedAt: new Date()
      }
      
], {});

  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Users', null, {});
  
  }
};
