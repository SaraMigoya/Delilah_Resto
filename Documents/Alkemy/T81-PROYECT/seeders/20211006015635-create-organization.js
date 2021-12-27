'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Organizations', [{
      name: 'ONG example',
      image: 'url',
      address: 'Address 123',
      phone: 12345678,
      email: 'ong@example.com',
      welcomeText:'Welcome text',
      aboutUsText: 'About us text',
      facebook: 'facebook.com',
      linkedin: 'linkedin.com',
      instagram: 'instagram.com',
      createdAt: new Date,
      updatedAt: new Date
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Organizations', null, {});
  }
};
