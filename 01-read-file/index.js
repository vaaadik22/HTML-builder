
const fs = require('fs');
const path = require('path');
const fileStream = fs.createReadStream(path.join(__dirname, 'text.txt'), 'utf-8');
let file = '';
fileStream.on('data', data => file += data);
fileStream.on('error', error => console.log(error.message));
fileStream.on('end', () => console.log(file));
