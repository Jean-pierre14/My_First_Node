// let http = require('http')
// let fs = require('fs')
const express = require('express')


const PORT = 3000 || process.env.PORT

const app = express()

app.set('view engine', 'ejs')
app.use('./assets', express.static('public'))

app.listen(PORT, (err) => {
    if (err) throw err
    console.log(`Server is running on port: ${PORT}`)
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