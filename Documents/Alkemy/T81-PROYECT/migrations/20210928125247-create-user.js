'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
    await queryInterface.createTable('Users', {
       id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
       },
       firstName: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      image: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      roleId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Roles',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      deletedAt: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      } 
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');  
  }
};
