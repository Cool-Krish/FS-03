const container = document.getElementById("result_div")

const first_name =  document.getElementById("firstname")
const last_name =  document.getElementById("lastname")
const country_name =  document.getElementById("country")
const player_score =  document.getElementById("score")

const submit_button =  document.getElementById("addplayer")

const error_div =  document.getElementById("error_info")

let month_names = ["January","February","March","April","May","June","July","August","September","October","November","December"];

submit_button.addEventListener("click",()=>{
    if(!first_name.value && !last_name.value && !country_name.value && !player_score.value){
        error_div.style.visibility = "visible"
    }
    else{
        error_div.style.visibility = "hidden"
    const date = new Date()

    const outer_div = document.createElement("div")
    outer_div.innerHTML = ""
    document.body.append(outer_div)
    outer_div.style.display = "flex"
    outer_div.style.alignItems = "center"
    outer_div.style.height = "50px"
    outer_div.style.width = "60%"
    outer_div.style.margin = "10px auto"
    outer_div.style.backgroundColor = "rgb(90, 80, 183)"
    outer_div.style.padding = "10px 10px"

    
    const first_section = document.createElement("div")
    first_section.textContent = ""
    outer_div.append(first_section)
    first_section.style.width = "30%"
    first_section.style.height = "50px"

    const name = document.createElement("div")
    name.textContent = `${first_name.value.toUpperCase()} ${last_name.value.toUpperCase()}`
    first_section.append(name)
    name.style.marginBottom = "10px"
    name.style.marginLeft = "10px"

    const d_ate =  document.createElement("div")
    d_ate.innerHTML = `${month_names[date.getMonth()]} ${date.getDate()},${date.getFullYear()}  ${date.getHours()}:${date.getMinutes()}`
    d_ate.style.color = "grey"
    d_ate.style.marginLeft = "10px"
    first_section.append(d_ate)
    d_ate.style.fontSize = "13px"

    const result_country = document.createElement("div")
    result_country.textContent = country_name.value.toUpperCase()
    outer_div.append(result_country)
    result_country.style.paddingLeft = "60px"
    result_country.style.width = "20%"

    const result_score = document.createElement("div")
    result_score.textContent = player_score.value
    outer_div.append(result_score)
    result_score.style.marginLeft = "130px"

    const last_Section = document.createElement("div")
    last_Section.innerHTML = ""
    outer_div.append(last_Section)
    last_Section.style.display = "flex"
    last_Section.style.justifyContent = "center"
    last_Section.style.height = "50px"
    last_Section.style.width = "30%"
    last_Section.style.marginLeft = "200px"

    const delete_button = document.createElement("button")
    delete_button.innerHTML = "<i class=\"fa-regular fa-trash-can\"></i>"
    last_Section.append(delete_button)
    delete_button.style.width = "50px"
    delete_button.style.cursor = "pointer"
    delete_button.style.height = "50px"
    delete_button.style.color = "red"
    delete_button.style.backgroundColor = "white"
    delete_button.style.borderRadius = "50%"
    delete_button.style.border = "1px solid pink"
    delete_button.onmouseover = ()=>{
        delete_button.style.backgroundColor = "lightgreen"
    }
    delete_button.onmouseout = ()=>{
        delete_button.style.backgroundColor = "white"
    }
    delete_button.addEventListener("click",()=>{
        outer_div.remove()
    })
    const increment_button = document.createElement("button")
    increment_button.innerHTML = "+5"
    last_Section.append(increment_button)
    increment_button.style.width = "50px"
    increment_button.style.height = "50px"
    increment_button.style.borderRadius = "50%"
    increment_button.style.cursor = "pointer"
    increment_button.style.backgroundColor = "white"
    increment_button.style.border = "1px solid pink"
    increment_button.style.marginLeft = "10px"
    increment_button.style.marginRight = "10px"
    increment_button.onmouseover = ()=>{
        increment_button.style.backgroundColor = "lightgreen"
    }
    increment_button.onmouseout = ()=>{
        increment_button.style.backgroundColor = "white"
    }
    let inc_count = 0
    increment_button.addEventListener("click",()=>{
        inc_count += 5
        result_score.textContent = Number(player_score.value)+inc_count
    })
    
    const decrement_button = document.createElement("button")
    decrement_button.innerHTML = "-5"
    last_Section.append(decrement_button)
    decrement_button.style.width = "50px"
    decrement_button.style.height = "50px"
    decrement_button.style.borderRadius = "50%"
    decrement_button.style.cursor = "pointer"
    decrement_button.style.backgroundColor = "white"
    decrement_button.style.border = "1px solid pink"
    decrement_button.onmouseover = ()=>{
        decrement_button.style.backgroundColor = "lightgreen"
    }
    decrement_button.onmouseout = ()=>{
        decrement_button.style.backgroundColor = "white"
    }
    let dec_count =0 
    decrement_button.addEventListener("click",()=>{
        dec_count += 5
        result_score.textContent = Number(player_score.value)-dec_count
    })
}
})