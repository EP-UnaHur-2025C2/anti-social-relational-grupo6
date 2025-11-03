'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Followers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      follower_nickname: {
        type: Sequelize.STRING(50),
        allowNull: false,
        references: {
          model: 'Users',
          key: 'nickName'
        }
      },
      followed_nickname: {
        type: Sequelize.STRING(50),
        allowNull: false,
        references: {
          model: 'Users',
          key: 'nickName'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Followers');
  }
};