const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

// create our Post model

class Post extends Model {};

// create fields/columns for Post model
Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        post_url: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isURL: true
            }
        },
        user_id: { // foreign key as it links with user model -- references id as the foreign key
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        }
    },
    { // metadata
                // pass in our imported sequelize connection (the direct connection to our db)
                sequelize,
        
                // don't pluralize name of database table
                freezeTableName: true,
        
                // use underscores instead of camel-casing
                underscored: true,
        
                // make it so our model name stays lowercase in the db
                modelName: 'post'
    }
);

module.exports = Post;