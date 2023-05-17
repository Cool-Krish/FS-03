

function checkNumber(str){

     const len = str.length

     for (let i=0; i< len; i++){
        if(str[i]!==str[len -1 -i]){
            return 'not'
        }
     }
     return 'yes'
    
}

console.log(checkNumber('aaaa'))