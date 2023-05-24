const { defineConfig } = require('cypress');
const fs = require('fs')
const mongoose = require('mongoose')

module.exports = defineConfig({
    e2e: {
        baseUrl: 'http://localhost:3000',
        viewportHeight: 1080,
        viewportWidth: 1920,
        retries: {
            runMode: 1,
            openMode: 0
        },
        video: false,
        defaultCommandTimeout: 4000,

        // eslint-disable-next-line
        setupNodeEvents(on, config) {
            
            on('task', {
                
                msgConsole() {
                    console.log('Mensagem do console.log dentro do NodeJs')

                    return null
                },

                lerPasta(caminho) {
                    return fs.readdirSync(caminho).length
                },

                conectarMongo() {

                    // criar a conexão
                    try {
                        mongoose.connect(config.env.enderecoBanco, {
                            useNewUrlParser: true,
                            useUnifiedTopology: true
                        })

                        console.log('Conexão estabelecida com o banco de dados')
                    } catch (err) {
                        console.log(err)
                    }

                    return null
                },
            })
        },
    },
});
