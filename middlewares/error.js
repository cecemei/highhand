path = require('path');

module.exports = (app) => {
  app.use(function(req, res, next) {
  	const err = new Error('Not Found');
   	err.status = 404;
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    res.sendFile(path.join(__dirname, '../app/error.html'));
    // res.send({statusCode: err.status, message: `Not Found - ${req.method} ${req.url}`});
  });
}
