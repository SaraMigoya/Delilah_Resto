const bcryptjs = require("bcryptjs");
const salt = bcryptjs.genSaltSync();
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [{
      firstName: 'TestUserAdmin1',
      lastName: 'Demo',
      email: 'testUserAdmin1@test.com',
      // Important: Password not encrypted yet! 
      password: bcryptjs.hashSync( 'bugHunteRsNodeGroup81Alkemy123!', salt ),
      roleId: 1,
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'TestUserAdmin2',
      lastName: 'Demo',
      email: 'testUserAdmin2@test.com',
      // Important: Password not encrypted yet! 
      password: bcryptjs.hashSync( 'bugHunteRsNodeGroup81Alkemy123!', salt ),
      roleId: 1,
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'TestUserAdmin3',
      lastName: 'Demo',
      email: 'testUserAdmin3@test.com',
      // Important: Password not encrypted yet! 
      password: bcryptjs.hashSync( 'bugHunteRsNodeGroup81Alkemy123!', salt ),
      roleId: 1,
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'TestUserAdmin4',
      lastName: 'Demo',
      email: 'testUserAdmin4@test.com',
      // Important: Password not encrypted yet! 
      password: bcryptjs.hashSync( 'bugHunteRsNodeGroup81Alkemy123', salt ),
      roleId: 1,
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'TestUserAdmin5',
      lastName: 'Demo',
      email: 'testUserAdmin5@test.com',
      // Important: Password not encrypted yet! 
      password: bcryptjs.hashSync( 'bugHunteRsNodeGroup81Alkemy123!', salt ),
      roleId: 1,
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'TestUserAdmin6',
      lastName: 'Demo',
      email: 'testUserAdmin6@test.com',
      // Important: Password not encrypted yet! 
      password: bcryptjs.hashSync( 'bugHunteRsNodeGroup81Alkemy123!', salt ),
      roleId: 1,
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'TestUserAdmin7',
      lastName: 'Demo',
      email: 'testUserAdmin7@test.com',
      // Important: Password not encrypted yet! 
      password: bcryptjs.hashSync( 'bugHunteRsNodeGroup81Alkemy123!', salt ),
      roleId: 1,
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'TestUserAdmin8',
      lastName: 'Demo',
      email: 'testUserAdmin8@test.com',
      // Important: Password not encrypted yet! 
      password: bcryptjs.hashSync( 'bugHunteRsNodeGroup81Alkemy123!', salt ),
      roleId: 1,
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'TestUserAdmin9',
      lastName: 'Demo',
      email: 'testUserAdmin9@test.com',
      // Important: Password not encrypted yet! 
      password: bcryptjs.hashSync( 'bugHunteRsNodeGroup81Alkemy123!', salt ),
      roleId: 1,
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'TestUserAdmin10',
      lastName: 'Demo',
      email: 'testUserAdmin10@test.com',
      // Important: Password not encrypted yet! 
      password: bcryptjs.hashSync( 'bugHunteRsNodeGroup81Alkemy123!', salt ),
      roleId: 1,
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'TestUserStandard1',
      lastName: 'Demo',
      email: 'testUserStandard1@test.com',
      // Important: Password not encrypted yet! 
      password: bcryptjs.hashSync( 'bugHunteRsNodeGroup81Alkemy123!', salt ),
      roleId: 2,
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'TestUserStandard2',
      lastName: 'Demo',
      email: 'testUserStandard2@test.com',
      // Important: Password not encrypted yet! 
      password: bcryptjs.hashSync( 'bugHunteRsNodeGroup81Alkemy123!', salt ),
      roleId: 2,
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'TestUserStandard3',
      lastName: 'Demo',
      email: 'testUserStandard3@test.com',
      // Important: Password not encrypted yet! 
      password: bcryptjs.hashSync( 'bugHunteRsNodeGroup81Alkemy123!', salt ),
      roleId: 2,
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'TestUserStandard4',
      lastName: 'Demo',
      email: 'testUserStandard4@test.com',
      // Important: Password not encrypted yet! 
      password: bcryptjs.hashSync( 'bugHunteRsNodeGroup81Alkemy123!', salt ),
      roleId: 2,
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'TestUserStandard5',
      lastName: 'Demo',
      email: 'testUserStandard5@test.com',
      // Important: Password not encrypted yet! 
      password: bcryptjs.hashSync( 'bugHunteRsNodeGroup81Alkemy123!', salt ),
      roleId: 2,
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'TestUserStandard6',
      lastName: 'Demo',
      email: 'testUserStandard6@test.com',
      // Important: Password not encrypted yet! 
      password: bcryptjs.hashSync( 'bugHunteRsNodeGroup81Alkemy123!', salt ),
      roleId: 2,
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'TestUserStandard7',
      lastName: 'Demo',
      email: 'testUserStandard7@test.com',
      // Important: Password not encrypted yet! 
      password: bcryptjs.hashSync( 'bugHunteRsNodeGroup81Alkemy123!', salt ),
      roleId: 2,
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'TestUserStandard8',
      lastName: 'Demo',
      email: 'testUserStandard8@test.com',
      // Important: Password not encrypted yet! 
      password: bcryptjs.hashSync( 'bugHunteRsNodeGroup81Alkemy123!', salt ),
      roleId: 2,
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'TestUserStandard9',
      lastName: 'Demo',
      email: 'testUserStandard9@test.com',
      // Important: Password not encrypted yet! 
      password: bcryptjs.hashSync( 'bugHunteRsNodeGroup81Alkemy123!', salt ),
      roleId: 2,
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'TestUserStandard10',
      lastName: 'Demo',
      email: 'testUserStandard10@test.com',
      // Important: Password not encrypted yet! 
      password: bcryptjs.hashSync( 'bugHunteRsNodeGroup81Alkemy123!', salt ),
      roleId: 2,
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: new Date,
      updatedAt: new Date
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
