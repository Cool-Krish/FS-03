
const btn = document.querySelector('.Sign-in')

btn.addEventListener("click", Store)
function Store() {
    const UserName = document.getElementById('Uname').value
    const Name = document.getElementById('Name').value
    const age = document.getElementById('Age').value
    localStorage.setItem("UserName", UserName);
    localStorage.setItem("Name", Name);
    localStorage.setItem("Age", age);
}