
const repl = require('repl');
const Sequelize = require('sequelize');

// Or you can simply use a connection uri
const sequelize = new Sequelize('postgres://postgres:Datam1ner@mydb.cnqujrmnprhe.us-west-1.rds.amazonaws.com:5432/tdm');


const createModel = (model)=> {
  let schema = model.schema;
  let sequelModel = sequelize.define(model.table, schema);
  for(let fn in model.helperMethods){
    sequelModel.prototype[fn] = model.helperMethods[fn];
    debugger;
  }
  return sequelModel;
  //replServer.context[model.name] = sequelModel;
};

module.exports = createModel;
