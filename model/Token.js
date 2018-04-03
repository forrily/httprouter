const Sequelize = require('sequelize'); 
const sequelize = require('../utils/MySQLManager').instance.dbRef; 

const Token = sequelize.define('token',{
  tokenId: {
      type:Sequelize.STRING, 
      field:'id', 
      primaryKey:false, 
}, 
  intAuthToken:Sequelize.STRING, 
  device:Sequelize.STRING, 
  ip:Sequelize.STRING
},  {
 timestamps:false, 
 tableName:'token'
}
); 

// Token.findOne({
//   where:{
//     intAuthToken:"qaqaqa",
//     id:'sp100029'
//   }
// })

exports.default = Token; 



