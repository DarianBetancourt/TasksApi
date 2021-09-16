'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     */
    await queryInterface.bulkInsert('Tasks', [{
      description: 'fazer modulo do autenticacao/ make authentication module',
      done: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      description: 'fazer modelo do Pessoa/ make Person model',
      done: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
