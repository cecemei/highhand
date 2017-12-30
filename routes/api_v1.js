

const express = require('express');
const router = express.Router();
const sequelize = require('../models/dbconn');
const UserModel = require('../models/user');

/* GET api . */
router.get('/', function(req, res, next) {
   res.send({ title: 'API service page.' });

});

router.get('/users', function(req, res, next) {
  res.send('the users page');
});

router.post('/users', function(req, res) {
  sequelize
    .authenticate()
    .then(() => {
      const User = UserModel(sequelize);
      let user = User.build({email: req.body.email,
        password: req.body.password});
      user.save()
        .then(()=>{
          res.send({email: user.email});
        }).catch(()=>{
          res.status(411);
          res.send({err: 'unable to create user'});
        });
    })
    .catch(err => {
      res.status(401);
      res.send({err: 'Unable to connect to the database:'});
    });

});

router.use(function(req, res, next) {
    // render the error page
    res.status(404);
    res.send({"error reason":"no such api"});
});


module.exports = router;
