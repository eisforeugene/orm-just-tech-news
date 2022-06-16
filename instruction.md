npm init -y 
install express mysql2 sequelize
create folders, db, config, models, routes, 
inside db create schema.sql to create a structure that tells the possible ways in which a data should be placed into a database (outline for db structure)
create database connection inside config, connection.js
set up environment variables, create .env after installing dotenv
load env variables into connection
create user.js inside models
define several columns for the Model
create index.js in models folder
create sub directory in the routes called api then create user-routes.js
implement crud actions
hook up the server // consolidate all routes
setup server.js
protect passwords in user-routes.js
install bcrypt and incorporate it into the user model to hash password
hash password after updating the password in User
create login route for authentication using using a post route
    compare and verify the hashed pw with an instance method on the user model definition