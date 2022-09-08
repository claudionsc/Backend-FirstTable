const db = require('./_database')

async function listData(){
    await db.connect()
    var result //inicia uma variável para armazenar resultado

   result = await db.query('SELECT * FROM evento')
    console.log('EVENTOS')
    console.log(result.rows);

   result = await db.query('SELECT * FROM participante')
    console.log('PARTICIPANTES')
    console.log(result.rows);

   

}

listData()