const fs =require('fs')
let search_term = "John";

fs.readFile('Q5john.txt',function(err,data){
    let array = [data.toString().split(' ')][0]

    if(err)throw err;
    if(data.includes(search_term)){
        let count = 0 

        for (var i = 0;i<array.length;i++){
            if(search_term===array[i]){
                count +=1
                

            }
        }
    }

})