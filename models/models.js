const Sequelize = require('sequelize');

const models = [
  { table: 'user',
    name:'User',
    schema: {
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      }
    }
},
];

module.exports = models;
