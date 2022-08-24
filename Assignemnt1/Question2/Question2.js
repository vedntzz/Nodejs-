var fs = require('fs');
var readme = fs.readFileSync('Readme.txt','utf8');
console.log(readme);