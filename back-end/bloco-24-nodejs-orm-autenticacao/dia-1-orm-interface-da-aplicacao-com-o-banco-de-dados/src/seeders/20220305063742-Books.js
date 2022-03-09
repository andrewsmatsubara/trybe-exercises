'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Books', [{
      title: 'Livro legal',
      author: 'Gênio do Chamyto',
      page_quantity: 500,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    {
      title: 'Como comer pão sem abrir a boca',
      author: 'Chefe doidera',
      page_quantity: 300,
      created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
    }
  ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Books', null, {});
  }
};
