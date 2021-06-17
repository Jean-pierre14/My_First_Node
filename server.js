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
    if (err) throw err
    success({ message: `Server is running on port: ${PORT}`, badge: true })
})


// let server = http.createServer()
// server.on('request', (req, res)=>{
//     res.writeHead(200, {'Content-type': 'text/html'})
//     fs.readFile('./views/index.ejs', 'utf8', (err, data)=>{
//         if(err){
//             res.send('Cannot open this url')
//         } else{
//             res.end(data)
//         }
//     })
// })
// server.listen(8080)