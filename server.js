const express = require('express');
const path = require('path');

const port = 3001 || process.env.PORT;
const app = express();

app.use('/', express.static(__dirname + '/app'));

require('./middlewares')(app);
require('./routes')(app);
require('./middlewares/error')(app);

app.listen(port, function onStart(err) {
  if (err) {
      console.log(err);
    }
  console.log('Listening on http://localhost:' + port);
  console.info('==> Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
});


app._router.stack.forEach(function(r){
  if (r.route && r.route.path){ console.log(r.route.path) } });
