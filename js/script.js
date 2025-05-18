// let loginBtn = document.querySelector("button");
// let message = document.querySelector(".loginBox p");
// let email = document.getElementById("email");
// let password = document.getElementById("password");
// loginBtn.addEventListener("click", () => {
//   if (email.value === "" && password.value === "") {
//     message.innerHTML = "Abe pahle email aur password to bhar le😁";
//   } else {
//     message.innerHTML = "";
//   }
// });

// document.getElementById("signUpForm").addEventListener('submit',(e)=>{
// e.preventDefault();
//   let sName = document.getElementById("sName").value;
//   let sEmail = document.getElementById("sEmail").value;
//   let sPassword = document.getElementById("sPassword").value;
//   localStorage.setItem("S_username", sName);
//   localStorage.setItem("S_Email", sEmail);
//   localStorage.setItem("S_Password", sPassword);

// })
// let button=document.getElementById("sBtn");
// button.addEventListener('click',(e)=>{
//   e.preventDefault();
//   window.onload()
// })

//rsponsive section
let slider= document.getElementById("slider");
let sliderSection=document.querySelector('.slideSection');
let sliderSection2=document.querySelector('.slideSection2');
slider.addEventListener('click',()=>{
if(sliderSection.style.display==='none' || sliderSection.style.display==='' && sliderSection2.style.display==='none' || sliderSection2.style.display==='' && slider.innerHTML===''||slider.innerHTML==='<i class="fa-solid fa-sliders"></i>'){
  sliderSection.style.display='flex';
  sliderSection2.style.display='flex';
  slider.innerHTML='<i class="fa-solid fa-xmark"></i>';
}else{
  sliderSection.style.display='none';
  sliderSection2.style.display='none';
  slider.innerHTML='<i class="fa-solid fa-sliders"></i>';

}
});

  

