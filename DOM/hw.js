const elem = document.querySelectorAll("#data")
const values = document.querySelector(".show")

for (let ele of elem){
     ele.addEventListener("change", (e)=>{
         let dat = e.target.value
          values.innerHTML = dat
     })
 }
 