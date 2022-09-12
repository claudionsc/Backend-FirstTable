const Sequelize = require('sequelize')
const sequelize = require('../_database')

// esse vento cria uma tabela

const Evento = sequelize.define('evento', {//o primeiro parâmetro é o nome da tabela
    // o segunto parâmetro é o nome das culunas
    nome: {
        type: Sequelize.STRING
    },
})

module.exports = Evento

//RELAÇÕES DOS BDS

const Participante = require('./participante')
Evento.belongsToMany(Participante, {through: 'evento_participante'})//O EVENTO
//PERTENCE A MUITOS PARTICIPANTES(MUITOS PRA MUITOS) 
// through: tabela intermediária, tipo de conexão
