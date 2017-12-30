

const express = require('express');
const router = express.Router();

/* GET api . */
router.get('/', function(req, res, next) {
   res.send({ title: 'API service page.' });

});

router.post('/', function(req, res, next) {
   res.send({ title: 'API service page.' });

});

router.use(function(req, res, next) {
    // render the error page
    res.status(404);
    res.send({"error reason":"no such api"});
});


module.exports = router;
