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

   result = await db.query(
    'SELECT e.nome AS evento, p.nome AS participante FROM evento AS e, participante AS p, evento_participante ep WHERE ep.evento_id = e.id AND ep.participante_id = p.id'
   )
   console.log('EVENTO COM PARTICIPANTES')
   console.log(result.rows);

}

listData()