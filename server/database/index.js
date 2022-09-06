const { connection, connect } = require('mongoose')
const { localdb } = require('../env')

module.exports = function() {
    connect(localdb, {
        useUnifiedTopology: true
    })

    connection.once('open', () => console.log('db connected...'))
    connection.on('error', (err) => console.log(err))
}