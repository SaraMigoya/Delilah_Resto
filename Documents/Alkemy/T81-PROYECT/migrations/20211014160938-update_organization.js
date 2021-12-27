'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Organizations', 'facebook', {
      type: Sequelize.STRING,
      allowNull: true
    });
    await queryInterface.addColumn('Organizations', 'linkedin', {
      type: Sequelize.STRING,
      allowNull: true
    });
    await queryInterface.addColumn('Organizations', 'instagram', {
      type: Sequelize.STRING,
      allowNull: true
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Organizations', 'facebook');
    await queryInterface.removeColumn('Organizations', 'linkedin');
    await queryInterface.removeColumn('Organizations', 'instagram');
  }
};
