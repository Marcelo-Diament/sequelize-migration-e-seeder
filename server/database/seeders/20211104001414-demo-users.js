'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        firstName: 'Fulano',
        lastName: 'de Tal',
        email: 'fulano@detal.com'
      },
      {
        firstName: 'Ciclano',
        lastName: 'de Tal',
        email: 'ciclano@detal.com'
      },
      {
        firstName: 'Beltrano',
        lastName: 'da Silva',
        email: 'beltrano@dasilva.com'
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
