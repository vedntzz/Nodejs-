var fs = require('fs');
var array = fs.readFileSync('Q9.txt').toString().split(" ");
for(i in array) {
    console.log(array[i]);
}