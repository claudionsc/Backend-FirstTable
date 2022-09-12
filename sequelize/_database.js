const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  host: 'localhost',
  database: 'postgres',
  username: 'postgres',
  password: 'admin', 
  dialect: 'postgres', //qual banco de dados vai se comunicar
  port: 5432,
  logging: false
});

module.exports = sequelize

// Teste DB connection
async function test(){
  try{
    let result = await sequelize.authenticate()
    console.log("Sequelize realizou a conexão com o banco de dados com sucesso!")
  }
  catch(error){
    console.error("Houve um erro ao conectar com o banco de dados:")
    console.error(error)
    process.exit()
  }
}

test()