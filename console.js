const models = require('./models/models.js');
const repl = require('repl');
const Sequelize = require('sequelize');
const createModel = require('./utilities/createSequelizeModel');
// Or you can simply use a connection uri
const sequelize = new Sequelize('postgres://postgres:Datam1ner@mydb.cnqujrmnprhe.us-west-1.rds.amazonaws.com:5432/tdm');

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
    var replServer = repl.start({});
    models.forEach((model)=> {
      //let schema = model.schema;
      let sequelModel = createModel(model);//sequelize.define(model.table, schema);
      replServer.context[model.name] = sequelModel;
      global[model.name] = sequelModel;
      //smodel.name.sync({force: true});

    });
    replServer.context.sequelize = sequelize;

    let user = replServer.context.user = replServer.context.User.build({firstName: 'David', 'lastName': 'Wong',
      password: 'password',
       email: 'david@gmail.com'});
    user.save()
      .then(()=>{
        console.log('create user successfully!');
        user.validateCredentials('password2');
      }).catch(()=>{
        console.error('create user failed!');
      });
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
