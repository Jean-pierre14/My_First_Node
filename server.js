let http = require('http')
let fs = require('fs')
let express = require('express')

let app = express()

app.set('view engine', 'ejs')
app.use('./assets', express.static('public'))

app.get('/', (request, response)=>{
    response.render('pages/index', {test: 'Hello'})
}).listen(3000)

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