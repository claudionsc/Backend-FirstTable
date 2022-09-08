const db = require('./_database')

async function dropTables(){//função para deletar tabelas
    await db.connect()//conecta com o banco
    await db.query(`DROP TABLE evento CASCADE`)//comandos do banco de dados
    await db.query(`DROP TABLE participante CASCADE`)
    await db.query(`DROP TABLE evento_participante CASCADE`)
    await db.end()//encerra conexão

    console.log('Tabelas removidas');
}

dropTables()