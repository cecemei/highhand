

const express = require('express');

const port = 3001 || process.env.PORT;
const app = express();

//app.set('views', __dirname + '/dev');
//app.set('view engine', 'mustache');
app.use(express.static(__dirname + '/dev'));

app.listen(port, function onStart(err) {
  if (err) {
      console.log(err);
    }
  console.log('Listening on http://localhost:' + port);
  console.info('==> Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port);
});
