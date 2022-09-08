const db = require('./_database')

async function insertData(){//comando de inserir dados
    await db.connect()

    const queryEvento = "INSERT INTO evento (nome) VALUES($1)" //cria um parâmetro, a variável a ser substituída.

    await db.query(queryEvento, ['Encontro de NodeJs'])
    await db.query(queryEvento, ['Encontro de Postgresql'])

    
    const queryParticipante = "INSERT INTO participante (nome) VALUES($1)" //cria um parâmetro, a variável a ser substituída.

    await db.query(queryParticipante, ['Carlos'])
    await db.query(queryParticipante, ['Augusto'])
    await db.query(queryParticipante, ['Janaína'])
    await db.query(queryParticipante, ['Rafael'])

    const queryEventoParticipante = "INSERT INTO evento_participante (evento_id,participante_id) VALUES($1, $2)" //cria um parâmetro, a variável a ser substituída.

    await db.query(queryEventoParticipante, [1, 1])
    await db.query(queryEventoParticipante, [1, 2])
    await db.query(queryEventoParticipante, [1, 3])

    await db.query(queryEventoParticipante, [2, 3])
    await db.query(queryEventoParticipante, [2, 4])

    await db.end()

    console.log('Dados inseridos')
}

insertData()