const knex = require('./config.js').knex

const atacante = {
    numerojogador: 7,
    nomejogador: 'Bruno'
}

//Insert
knex('jogador')
.insert(atacante, 'idjogador')
.then(ret => {
    console.log(ret)
    process.exit(0)
})