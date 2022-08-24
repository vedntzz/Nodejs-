var fs = require('fs');
fs.writeFileSync('Q4readme.txt','This statememnt is for Question4');
var Q4readme  = fs.readFileSync('Q4readme.txt','utf8');
console.log(Q4readme);