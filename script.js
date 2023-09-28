const firstName = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const singUpBtn = document.getElementById("singupBtn");

// this logic is checking if any profile exist or not
if (localStorage.getItem("token")) {
  alert("Already logged in!");
  window.location.href = "/profile";
}

function generateToken(length) {
  // for generating 16 digits alphanumeric token
  const allCharacters =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let token = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allCharacters.length);
    token += allCharacters[randomIndex];
  }
  return token;
}

function saveUser(){
    let userData = {
        firstName: firstName.value,
        lastname: lastname.value,
        email: email.value,
    }
    localStorage.setItem('userData',JSON.stringify(userData));
    localStorage.setItem('token',generateToken(16));
    alert('sign up successful');
    window.location.href='./profile';
}

// password -> hash this password -> token and then save

singUpBtn.addEventListener("click", (event) => {
  event.preventDefault(); // required attribute will not work
  // with event.preventDefault();

//   if any field is empty
  if (
    !firstName.value ||
    !lastname.value ||
    !email.value ||
    !password.value ||
    !confirmPassword.value
  ) {
    alert("all fields are mandatory");
  }
//   password checking
  else{
    // user@example.com
    // user@college.ac.in
    // email.split('@')
    if (password.value !== confirmPassword.value) {
        alert('password not matching');
        password.value='';
        confirmPassword.value='';
    }else{
        // save the user in localStorage
        saveUser();
    }
  }
});
