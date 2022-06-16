const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection'); // import the connection to sql through sequelize
const bcrypt = require('bcrypt');

// create our User model
class User extends Model {  // inherits all functionality of the Model class (extends) 
    // set up method to run on instance data (per user) to check password
    checkPassword(loginPw) { // takes in plaintext pw retrieved from the client request at req.body.email and compares to hashed pw
        return bcrypt.compareSync(loginPw, this.password); //this allows access to this user's properties including pw which was stored in a hashed string
    }
 }

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
        },
    },
    {
        // TABLE CONFIGURATION OPTIONS GO HERE
        hooks: { // hook will be fired just before a new instance of User is created.
            // set up beforeCreate lifecycle 'hook' functionality
            async beforeCreate(newUserData) { // execute bcrypt hash function on plaintext password

                // pass userData obj that contains pw in the password property, saltRound = 10
                // hashed pw is then passed to the promise object newUserData obj with a hashed pw property.
                newUserData.password = await bcrypt.hash(newUserData.password, 10)
                // the return statement then exits out of the function returning the hashed password in the newUserData
                return newUserData;
            },
            // set up beforeUpdate lifecycle 'hook' functionality // add an option to the query call in user-routes.js 
            async beforeUpdate(updatedUserData) {
                updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10)

                return updatedUserData;
            }
        },
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