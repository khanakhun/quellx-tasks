const express = require('express')
const dontenv = require('dotenv').config()
const weatherRoute = require('./routes')
const jwtTokenRotue = require('./routes/jwt')
const jwtAuth = require('./helpers/jwt')
const errorHandler = require('./helpers/errorHandling')
const app = express()

const PORT = 8080 || process.env.PORT

app.use(express.json())
app.use(jwtAuth())
app.use(errorHandler)

app.use('/weather', weatherRoute)
app.use('/', jwtTokenRotue)
app.listen(PORT, () => {
	console.log(`Server Listening on Port http://localhost:${PORT}`)
})
