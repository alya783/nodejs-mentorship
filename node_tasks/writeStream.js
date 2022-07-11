const fs = require('fs');

fs.appendFile('writeStream.txt', 'first line,\nsecond line', function (err) {
    if (err) throw err;
    console.log('Finished!');
});