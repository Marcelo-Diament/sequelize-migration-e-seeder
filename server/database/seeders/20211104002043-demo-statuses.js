'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Statuses', [{
      title: '01- A Desenvolver'
  },
  {
      title: '02 - Em Desenvolvimento'
  },
  {
      title: '03 - A Validar'
  },
  {
      title: '04 - Em Validação'
  },
  {
      title: '05 - Validado'
  },
  {
      title: '06 - A Ajustar'
  },
  {
      title: '07 - Finalizado'
  }
], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Statuses', null, {});
}
};
