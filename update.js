let fs = require('fs')

fs.appendFile('root.txt', 'This the update text ', (err)=>{
    if(err) throw err
    console.log('Update!')
})