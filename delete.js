var fs = require('fs');

fs.unlink('root.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});