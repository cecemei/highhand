

const express = require('express');
const router = express.Router();

/* GET api . */
router.get('/', function(req, res, next) {
   res.send({ title: 'API service page.' });

});

router.post('/user', function(req, res, next) {
  const sequelize = require('../models/dbconn');
  const UserModel = require('./models/user.js');

  sequelize
    .authenticate()
    .then(() => {
      const User = UserModel(sequelize);
      let user = User.build({email: req.data.email,
        password: req.data.password});
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
