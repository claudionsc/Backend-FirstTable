const models = require('./models');
const Participante = require('./models/participante');

async function select(){
    console.log('/n')

    // SELECIONANDO EVENTOS 
    const eventos = await models.evento.findAll()//caso tenha condição where, colocar nos parenteses de findAll
    eventos.forEach((evento) => {
        console.log('Evento', evento.nome)
    });
    console.log('/n')

    // SELECIONANDO PARTICIPANTES 
    const participantes = await models.participante.findAll()
    participantes.forEach((participante) => {
        console.log('Participantes', participante.nome)
    })
    console.log('/n')
    
    // SELECIONANDO PARTICIPANTES COM EVENTOS 
    const eventosComParticipantes = await models.evento.findAll({
        include: [
            {
                model: models.participante
            }
        ]
    })
    eventosComParticipantes.forEach((evento) => {
        console.log('Evento', evento.nome)
        evento.participantes.forEach((participante) => {
            console.log('-----> Participante: ', participante.nome)
        })
    })

    await models.sequelize.close()
}
select()