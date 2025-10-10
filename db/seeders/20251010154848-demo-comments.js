'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Comments', [
      {
        body: '¡Excelente post! Me encanta el contenido.',
        visible: true,
        postId: 1,
        userId: 2, // bob comenta en post de alice
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        body: 'Muy interesante, gracias por compartir',
        visible: true,
        postId: 1,
        userId: 3, // charlie comenta en post de alice
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        body: 'Esto es justo lo que estaba buscando 👍',
        visible: true,
        postId: 2,
        userId: 1, // alice comenta en post de bob
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        body: '¿Podrías profundizar más en este tema?',
        visible: true,
        postId: 2,
        userId: 4, // diana comenta en post de bob
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        body: 'Gran trabajo, sigue así!',
        visible: true,
        postId: 3,
        userId: 5, // edward comenta en post de charlie
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        body: 'Me ayudó mucho esta información',
        visible: true,
        postId: 3,
        userId: 1, // alice comenta en post de charlie
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        body: 'Comentario oculto por moderación',
        visible: false,
        postId: 4,
        userId: 2, // bob comenta en post de diana
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        body: 'Totalmente de acuerdo contigo',
        visible: true,
        postId: 4,
        userId: 3, // charlie comenta en post de diana
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        body: 'Increíble contenido, aprendí mucho',
        visible: true,
        postId: 5,
        userId: 4, // diana comenta en post de edward
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        body: 'Esperando más posts como este',
        visible: true,
        postId: 5,
        userId: 1, // alice comenta en post de edward
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Comments', null, {});
  }
};
