const knex = require('./config.js').knex
const table = 'contato'

if(process.argv.length < 3){
    console.log('usage: node index_fixa.js operação argumento')
}else{
    if(process.argv[2] == 'list'){
        //Select
        knex(table)
        .select()
        .then(ret => {
            console.log(ret)
            process.exit(0)
        })
    }else if(process.argv[2] == 'insert'){
        
        const contato = {
            nomecontato: process.argv[3],
            datacriacaocontato: Date.now(),
            telefonecontato: process.argv[4]
        }
        //Insert
        knex(table)
        .insert(contato, 'idcontato')
        .then(ret => {
            console.log(ret)
            process.exit(0)
        })

    }else if(process.argv[2] == 'update'){
        const nomecontato = process.argv[3]
        const idcontato = process.argv[4]

        //Update
        knex(table)
        .update({nomecontato})
        .where({idcontato}).then(ret => {
        console.log(ret)
        process.exit(0)
        })
       
    }else if(process.argv[2] == 'delete'){
        const idcontato = process.argv[3]

        knex(table).del().where({idcontato}).then(ret => {
        console.log(ret)
        process.exit(0)
        })
        
    }else{
        console.log('Opção Inválida')
        process.exit(0)
    }
    
}
