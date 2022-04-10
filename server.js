// let http = require('http')
// let fs = require('fs')
const express = require('express'),
    errorHandlers = require('./middleware/errorMiddleware'),
    dotenv = require('dotenv').config(),
    { success, error } = require('consola'),
    PORT = process.env.PORT || 3000,
    app = express()

app.set('view engine', 'ejs')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('./assets', express.static('public'))

app.use('/', require('./route/'))

app.use('/mongoose', require('./route/mongoose'))

app.use(errorHandlers)

app.listen(PORT, (err) => {
    if (err) error({ message: `Error: ==> ${err}`, badge: true })
    success({ message: `Server is running on port: ${PORT}`, badge: true })
})