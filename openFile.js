let fs = require('fs')

fs.open('root.txt', 'w', (err, file)=>{
    if(err) throw err
    console.log('saved!')
})