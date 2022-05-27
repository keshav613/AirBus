- App.js create a application server at port mentioned as a environment variable or with 8080 as default.

- Our application is based on ORM called 'sequelize' which lets the user choose between the following database technologies: 'mysql' / 'postgres' / 'mariadb' / 'sqlite' / 'mssql' / 'snowflake'. In the config/db.config.js file user can specify the Db configurations like the technology and parameters for forming a database connection string like host, username, password, Db name...

- We have a Db collection called 'Items' where each item has a Id and Desciption.

- In routes folder, we have exposed the following routes for CRUD operations

1. Create

- POST "/api/v1/items/"
  To insert a new item with the below structure
  Body: {
  id: type String
  desciption: type String
  }

2. Read

- GET "/api/v1/items/"
  To retrieve all the items persisted in database

- GET "/api/v1/items/{id}"
  To retrieve single item with id

3. Update

- PATCH "/api/v1/items/{id}"
  To update a item with id

4. Delete

- DELETE "/api/v1/items/{id}"
  To delete a item with id
