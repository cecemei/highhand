const api_v1 = require('../controllers/api_v1');
const session = require('../controllers/session');

module.exports = (app) => {
  app.use('/session', session);
  //serving RESTful API
  app.use('/api/v1', api_v1);
}