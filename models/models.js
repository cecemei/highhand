const bcrypt = require('bcrypt');
const saltRounds = 10;


const Sequelize = require('sequelize');

const models = [
  { table: 'user',
    name:'User',
    helperMethods:{
      validateCredentials:function(inputPassword){
        return bcrypt.compare(inputPassword, this.getDataValue('passwordHash'), function(err, res){
          if(err)
          {
            console.error('Validate password error!');
          } else{
            console.log('validate password no error!');
            console.log(res);
            return res;
          }
        });


      }
    },
    schema: {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.VIRTUAL,
        set(password){
          let hash = bcrypt.hashSync(password, saltRounds);
          this.setDataValue('passwordHash', hash);
        }
      },
      passwordHash: {
        type: Sequelize.STRING
      },
      sessionToken: {
        type: Sequelize.STRING
      }
    }
},
];

module.exports = models;
