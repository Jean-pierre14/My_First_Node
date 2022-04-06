// let http = require('http')
// let fs = require('fs')
const express = require('express')
const dotenv = require('dotenv')
const { success, error } = require('consola')

dotenv.config()

const PORT = process.env.PORT || 3000
const app = express()

app.set('view engine', 'ejs')
app.use('./assets', express.static('public'))
app.use('/', require('./route/'))
app.use('/mongoose', require('./route/mongoose'))

app.listen(PORT, (err) => {
    if (err) error({ message: `Error: ==> ${err}`, badge: true })
    success({ message: `Server is running on port: ${PORT}`, badge: true })
})