const Sequelize = require('sequelize');
const config = require('./config');


const {host, port, username, password, database} = config.database;
const sequelize = new Sequelize({
    username,
    database,
    password,
    host,
    port,
    dialect: 'mysql',
    logging: false
    
});

const init = async () => {
    console.log('Conectando con la DB...');
    return sequelize.authenticate();
};



module.exports = {init, sequelize, Sequelize};