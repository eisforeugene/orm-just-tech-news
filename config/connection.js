// import sequelize constructor from library
const Sequelize = require('sequelize');
require('dotenv').config();

// create connection to database, pass in mySQL information

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env_DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

module.exports = sequelize;

// importing base sequelize class and using it to create a new connection to the database. the new Sequelize() accepts the db name, mysql username, pw as parameters, then we pass configuration settings, once finished we export the conneciton.