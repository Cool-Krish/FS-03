const displayDetail = document.querySelector(".main")







async function User(){
    const UserDetails = await fetch(`https://randomuser.me/api/?results=1`)

    const userdata = await UserDetails.json()

    let phone = userdata.results[0].cell
    let DOB = userdata.results[0].dob.date
    let AGE = userdata.results[0].dob.age
    let Email = userdata.results[0].email
    let Name = userdata.results[0].name.first
    let Namelast = userdata.results[0].name.last
    let Nametitle = userdata.results[0].name.title
    let Country = userdata.results[0].location.country
    let Picture = userdata.results[0].picture.large
    console.log(userdata)

    displayDetail.innerHTML = `<img src="${Picture}" alt="">
        <div id="details">
            <h2>${Nametitle} <span> ${Name}</span><span> ${Namelast}</span></h2>
            <h3>&#127874 <span>${DOB}</span> <span> (${AGE} Year Old)</span></h3>
            <h3>&#128231 <span>${Email}</span></h3>
            <h3>&#128222 <span>${phone}</span></h3>
            <h3>&#127757 <span>${Country}</span></h3>

        </div>`

}
User()