require('dotenv').config()
const { port, clientUrl, cookieSecret } = require('./env')

const express = require('express')
const app = express()
const server = require('http').createServer(app)

require('./database')()

const cors = require('cors')
const corsOptions = {
    origin: clientUrl,
    credentials: true
}
app.use(cors(corsOptions))
app.use(express.json())

const cookieParser = require('cookie-parser')
app.use(cookieParser(cookieSecret))

app.use('/api', require('./router/routes'))

server.listen(port, () => {
    console.log(`listening server on ${port}!`);
})
