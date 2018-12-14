

const express = require('express');
const router = express.Router();
const User = require('../models/user');

/* GET api . */
router.get('/', function(req, res, next) {
   res.send({ title: 'API service page.' });

});

router.get('/users', function(req, res, next) {
  res.send('the users page');
});

router.post('/users', function(req, res) {
  if(req.body.email === undefined || req.body.password === defined ){
    return res.send({ err: 'email or password invalid.'});
  }
  let user = User.build({email: req.body.email,
    password: req.body.password});
  user.save()
    .then(()=>{
      res.send({email: user.email});
    }).catch(()=>{
      res.status(411);
      res.send({err: 'unable to create user'});
    });


});

router.use(function(req, res, next) {
    // render the error page
    res.status(404);
    res.send({"error reason":"no such api"});
});


module.exports = router;
