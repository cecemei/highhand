const User = require('./models/user');
const repl = require('repl');
const db = require('./models/dbconn');

db
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
    var replServer = repl.start({});
    replServer.context.User = User;

    let user = replServer.context.User.build({firstName: 'David', 'lastName': 'Wong',
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
