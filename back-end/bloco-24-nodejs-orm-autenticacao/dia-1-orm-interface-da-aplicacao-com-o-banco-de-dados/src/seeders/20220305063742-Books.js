'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Books', [{
      title: 'Livro legal',
      author: 'Gênio do Chamyto',
      pageQuantity: 500,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      title: 'Como comer pão sem abrir a boca',
      author: 'Chefe doidera',
      pageQuantity: 300,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    }
  ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Books', null, {});
  }
};
