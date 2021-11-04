'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Todos', [{
      title: 'To Do 01',
      excerpt: 'Resumo do To Do 01',
      description: 'Descrição completa do To Do 01'
    },
    {
      title: 'To Do 02',
      excerpt: 'Resumo do To Do 02',
      description: 'Descrição completa do To Do 02'
    },
    {
      title: 'To Do 03',
      excerpt: 'Resumo do To Do 03',
      description: 'Descrição completa do To Do 03'
    }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Todos', null, {});
  }
};
