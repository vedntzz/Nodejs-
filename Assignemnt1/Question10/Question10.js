const fs = require('fs')

let cli_text = process.argv.slice(2).toString()

fs.writeFileSync('Q10.txt',cli_text)
console.log('The file was saved')