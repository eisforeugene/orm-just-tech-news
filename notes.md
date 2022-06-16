why didn't we install mysql? sequelize prefers to work with mysql2 library

sequelize: promise-based node.js ORM. It is a JavaScript library that works with any dialect of SQL. Saves time writing SQL to define our tables and queries because we can use object oriented concepts to model our database tables using JavaScript classes -- validators custom rules. Entirely JavaScript library that allows the developer to write JS that interacts with a relational DB

sequelize takes a object-oriented JS concept and applies them to how we setup the SQL tables. this is done through sequelize's model class where we create our own JS class and define the columns, datatypes, and any other rules we need the data to adhere to. the class serves as a layer between API and db and will handle all transactions of data between the two 

model class: is what we create our own models from using the extends keyword so User inherits all of the functionality of the Model class has
once User class is created, we use .init() method to initialize the model's data and configuration, passing in 2 objects as arguments. 1st = columns & datatypes for those columns. 2nd = object it accepts configures certain options for the table

Every time we extend a class from the Sequelize Model class, that new class(or model) inherits a number of methods for creating, reading, updating and deleting data from the database. .init() method we execute after is the part that actually provides context as to how those inherited methods should work

object relational mapping: is a technique that allows us to query and manipulate data that is stored in a relational db without writing sql queries
- use object-oriented approach by taking advantage of methods provided by the ORM
Advantages: easy to test, support for syncing db, validates data and can restrict to specifc form, complex sql queries can be used using relatively simple JS syntax

schema: represents any structure that we're defining around the data: tables, views, fields, packages, etc 

REST, Representational State Transfer. 

hooks are functions that are called before or after calls in Sequelize

why use post instead of get for the login process? get method carries the req parameters appended in the URL string, whereas a post method carries the req parameters in req.body, which makes it a more secure way of transferring data 

what is instance method in objected oriented programming? returns or makes use of information (properties) specific to that particular object
    objects generated from classes are instances of the class
