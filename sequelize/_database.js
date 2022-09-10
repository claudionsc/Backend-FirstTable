const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  host: 'localhost',
  database: 'postgres',
  username: 'postgres',
  password: 'admin',
  dialect: 'postgres',//qual o banco de dados irá se comunicar, instalar a dependencia
  port: 5432,
  logging: true
});

module.exports = sequelize

// TESTE DB Connection
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