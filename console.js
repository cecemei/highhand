const models = require('./models/models');
const repl = require('repl');
const Sequelize = require('sequelize');

// Or you can simply use a connection uri
const sequelize = new Sequelize('postgres://postgres:Datam1ner@mydb.cnqujrmnprhe.us-west-1.rds.amazonaws.com:5432/tdm');

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
    var replServer = repl.start({});
    models.forEach((model)=> {
      let schema = model.schema;
      let sequelModel = sequelize.define(model.table, schema);
      replServer.context[model.name] = sequelModel;
    });
    replServer.context.sequelize = sequelize;
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });



//const User = sequelize.define('user', {}); // timestamps is false by default
// User.findAll({
//   where: {
//     firstName: 'John'
//   }
// }).then(users => {
//   console.log(users);
// });
//sequelize.close();
/*
sequelize.query(`SELECT * FROM users where "firstName" = 'John'`).then(myTableRows => {
  console.log(myTableRows.length);
});*/
