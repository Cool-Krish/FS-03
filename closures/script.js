//for(var i=1; i<=5; i++){
//    setTimeout(function (){
//        console.log(i)
//    },i*1000)
//}

function z(){
    var b=900
    function x(){
        var a=7
        function y(){
            console.log(a,b)
        }
        y()
    }
    x()
}
z()

//for(var i=1; i<=5; i++){
//  (function(num){
//    setTimeout(function (){
//      console.log(num)
//    },num*1000)
//  })(i)
//}

 for(var i=1;i<=5;i++)
 {
   setTimeout(()=>{
     i+=10;
     console.log(i)
     console.log(Math.floor(i/10))
   },1000)
 }