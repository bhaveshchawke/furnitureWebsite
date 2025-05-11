let loginBtn = document.querySelector("button");
let message = document.querySelector(".loginBox p");
let email = document.getElementById("email");
let password = document.getElementById("password");
loginBtn.addEventListener("click", () => {
  if (email.value === "" && password.value === "") {
    message.innerHTML = "Abe pahle email aur password to bhar le😁";
  } else {
    message.innerHTML = "";
  }
});

document.getElementById("signUpForm").addEventListener('submit',(e)=>{
e.preventDefault();
  let sName = document.getElementById("sName").value;
  let sEmail = document.getElementById("sEmail").value;
  let sPassword = document.getElementById("sPassword").value;
  localStorage.setItem("S_username", sName);
  localStorage.setItem("S_Email", sEmail);
  localStorage.setItem("S_Password", sPassword);

})
let button=document.getElementById("sBtn");
button.addEventListener('click',(e)=>{
  e.preventDefault();
  window.onload()
})

  

