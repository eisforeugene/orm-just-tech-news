const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// turn on routes
app.use(routes);

// turn on connection to db and server || sync means that Sequelize is taking the models and connecting them to associated db tables and if it doesn't find one it will create one
sequelize.sync({ force: false }).then(() => { // if it was force: true, it would drop and re-create all of the db tables on startup
    app.listen(PORT, () => console.log('Now Listening'));
});