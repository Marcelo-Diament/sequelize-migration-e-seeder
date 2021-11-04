'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('Statuses', [{
            title: '01- A Desenvolver',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            title: '02 - Em Desenvolvimento',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            title: '03 - A Validar',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            title: '04 - Em Validação',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            title: '05 - Validado',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            title: '06 - A Ajustar',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            title: '07 - Finalizado',
            createdAt: new Date(),
            updatedAt: new Date()
        }
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Statuses', null, {});
    }
};
