var fs = require('fs');

var data = fs.readFileSync('Q8.txt', 'utf8');

var sum = (data) => {
    let list = [data.split(',')][0];
    let sum = 0;

    for(let i = 0; i<list.length; i++){
        sum += parseInt(list[i])
    }

    return sum
}

console.log(sum(data))