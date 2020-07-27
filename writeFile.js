
let fs = require('fs');

fs.writeFile('root.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});