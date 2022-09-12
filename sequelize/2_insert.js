const models = require('./models')

async function insert(){
    
    // EVENTOS 
    const eventoNode = await models.evento.create({nome: 'Encontro Nodejs'})
    const eventoPostgres = await models.evento.create({nome: 'Encontro Postgresql'})

    // PARTICIPANTES
    const carlos = await models.participante.create({nome: 'Carlos'})
    const augusto = await models.participante.create({nome: 'Augusto'})
    const janaina = await models.participante.create({nome: 'Janaina'})
    const rafael = await models.participante.create({nome: 'Rafael'})

    // PARTICIPANTES EM EVENTOS 
    await eventoNode.setParticipantes([carlos, augusto, janaina])
    await eventoPostgres.setParticipantes([janaina, rafael])

    await models.sequelize.close()

    console.log('dados inseridos')

}
insert()