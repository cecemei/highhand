

const express = require('express');
const api_v1 = require('./routes/api_v1');
const session = require('./routes/session');
const port = 3001 || process.env.PORT;
const app = express();


app.use('/session', session);
//serving RESTful API
app.use('/api/v1', api_v1);
//serving static page
app.use('/', express.static(__dirname + '/dev'));

app.listen(port, function onStart(err) {
  if (err) {
      console.log(err);
    }
  console.log('Listening on http://localhost:' + port);
  console.info('==> Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
});

app.use('/', function(req, res, next) {
   var err = new Error('Not Found');
   err.status = 404;
   next(err);
 });

 app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.sendFile('dev/error.html', {root: __dirname });
  });
