const knex = require('./config.js').knex

const idjogador = 8
const numerojogador = 10

//Update
knex("jogador")
.update({numerojogador})
.where({idjogador}).then(ret => {
  console.log(ret)
  process.exit(0)
})