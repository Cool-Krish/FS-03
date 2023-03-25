let census2020 = [
  { state: "Connecticut", ppl: 3605944, isNE: true },
  { state: "Maine", ppl: 1362359, isNE: true },
  { state: "Massachusetts", ppl: 7029917, isNE: true },
  { state: "New Hampshire", ppl: 1377529, isNE: true },
  { state: "New Jersey", ppl: 9288994, isNE: false },
  { state: "New York", ppl: 20201249, isNE: false },
  { state: "Pennsylvania", ppl: 13002700, isNE: false },
  { state: "Rhode Island", ppl: 1097379, isNE: true },
  { state: "Vermont", ppl: 643077, isNE: true },
];

let stateSize = [
  { state: "Vermont", sqm: 9623 },
  { state: "New York", sqm: 54556 },
  { state: "Connecticut", sqm: 5543 },
  { state: "Pennsylvania", sqm: 46055 },
  { state: "New Jersey", sqm: 8729 },
  { state: "Massachusetts", sqm: 10565 },
  { state: "New Hampshire", sqm: 9350 },
  { state: "Maine", sqm: 35385 },
  { state: "Rhode Island", sqm: 1214 },
];
var arr = []
census2020.find((value) => {
    var b= 0
    stateSize.find((a)=>{
        if(a.state==value.state){
            b= a.sqm
        }
    })
  var x =value.state
  var y =  value.ppl/b
   arr.push(x)
  arr.push(y)
});

console.log(arr)
