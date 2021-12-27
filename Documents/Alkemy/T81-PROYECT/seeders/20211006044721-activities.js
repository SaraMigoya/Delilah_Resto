'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Activities', [{
      name: 'Recreational activity ',
      content: 'Here we have a recreation activity organized by the ONG ALKEMY',
      image: 'demo@demo.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkInsert('Activities', [], {});
  }
};
