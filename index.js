const knex = require('./config.js').knex

//Select
knex('jogador')
.select()
.where('numerojogador', 11)
.then(ret => {
    console.log(ret)
    process.exit(0)
})