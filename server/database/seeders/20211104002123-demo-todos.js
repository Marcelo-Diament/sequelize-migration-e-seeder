'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Todos', [
      {
        title: 'To Do 01',
        excerpt: 'Resumo do To Do 01',
        description: 'Descrição completa do To Do 01',
        userId: 1,
        statusId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'To Do 02',
        excerpt: 'Resumo do To Do 02',
        description: 'Descrição completa do To Do 02',
        userId: 2,
        statusId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'To Do 03',
        excerpt: 'Resumo do To Do 03',
        description: 'Descrição completa do To Do 03',
        userId: 3,
        statusId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Todos', null, {});
  }
};
