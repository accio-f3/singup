// this logic is checking if any profile exist or not
let welcomeHeading = document.getElementById("welcome-heading");
let name = document.getElementById("name");
let email = document.getElementById("email");
let logoutBtn = document.getElementById('logout-btn');

if (!localStorage.getItem("token")) {
  alert("You need to sign up");
  window.location.href = "../index.html";
}

let userData = JSON.parse(localStorage.getItem("userData"));

welcomeHeading.innerText = `Welcome ${userData.firstName}`;
name.innerText = `${userData.firstName} ${userData.lastname}`;
email.innerText = userData.email;

logoutBtn.addEventListener('click',()=>{
    localStorage.removeItem("userData");
    localStorage.removeItem("token");
    alert('Log out successful');
    window.location.href = "../index.html";
})
