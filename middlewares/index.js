const bodyParser = require('body-parser');

module.exports = (app) => {
  app.use(bodyParser());
  app.use(bodyParser.urlencoded({ extended: false }));
}