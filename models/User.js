const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection'); // import the connection to sql through sequelize

// create our User model
class User extends Model {} // inherits all functionality of the Model class (extends) 

// define table columns and configuration
User.init(
    {
        // TABLE COLUMN DEFINITIONS GO HERE
        // define an id column
        id: {
            // use the special saequelize datatypes object to provide what type of data it is
            type: DataTypes.INTEGER,
            // this is equivalent of SQL's 'NOT NULL' option
            allowNull: false,
            // instruct that this is the primary key
            primaryKey: true,
            // turn on autoincrement
            autoIncrement: true
        },
        // define a user column
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // define an email column
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            // there cannot be any duplicate email values in this table
            unique: true,
            // if allowNull is set to false, we can run our data through validators before creating the table data
            validate: {
                isEmail: true
            }
        },
        // define a password column
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                // this means the pw must be at least 4 characters long
                len: [4]
            }
        }
    },
    {
        // TABLE CONFIGURATION OPTIONS GO HERE

        // pass in our imported sequelize connection (the direct connection to our db)
        sequelize,
        // don't automatically create createdAt/updatedAt timestamp fields
        timestamps: false,

        // don't pluralize name of database table
        freezeTableName: true,

        // use underscores instead of camel-casing
        underscored: true,


        // make it so our model name stays lowercase in the db
        modelName: 'user'
    }
);

module.exports = User;

// created user model to have 4 columns 