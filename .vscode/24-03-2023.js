const arr =[
    [0,1],
    [2,3,4,5],
    [6,7]
]
console.log(arr.flat())
let flatArray = arr.reduce((acc, curVal) => {
    return acc.concat(curVal)
}, []);
 console.log(flatArray);