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
let slider = document.getElementById("slider");
let sliderSection = document.querySelector(".slideSection");
let sliderSection2 = document.querySelector(".slideSection2");
slider.addEventListener("click", () => {
  if (
    sliderSection.style.display === "none" ||
    (sliderSection.style.display === "" &&
      sliderSection2.style.display === "none") ||
    (sliderSection2.style.display === "" && slider.innerHTML === "") ||
    slider.innerHTML === '<i class="fa-solid fa-sliders"></i>'
  ) {
    sliderSection.style.display = "flex";
    sliderSection2.style.display = "flex";
    slider.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  } else {
    sliderSection.style.display = "none";
    sliderSection2.style.display = "none";
    slider.innerHTML = '<i class="fa-solid fa-sliders"></i>';
  }
});

//searchSection

let search = document.querySelector(".searchSection input");
let searchSymbol = document.querySelector("#searchSymbol");
let sec2 = document.querySelectorAll("#sec2 p");

let isOpen = false;

searchSymbol.addEventListener("click", () => {
  if (!isOpen) {
    search.style.width = "40vw";
    search.style.opacity = "1";
    searchSymbol.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    searchSymbol.style.color = "red";
    sec2.forEach((p) => (p.style.opacity = "0"));
    isOpen = true;
  } else {
    search.style.width = "0";
    search.style.opacity = "0";
    searchSymbol.innerHTML = '<i class="fa-solid fa-magnifying-glass"></i>';
    searchSymbol.style.color = "black";
    sec2.forEach((p) => (p.style.opacity = "1"));
    isOpen = false;
  }
});

//theme section
let theme = document.querySelector(".theme");
// isActive=false;

theme.addEventListener("click", () => {
  theme.classList.toggle("themeActive");
  document.body.classList.toggle("bgtheme");
});
//scroll behavie

function scrollView(element1, element2) {
  element1.addEventListener("click", () => {
    element2.scrollIntoView({ behavior: "smooth" });
  });
}
//first part
let diningRoom = document.getElementById("diningRoom"); //sec1 first p
let section3 = document.querySelector(".section3");//section 3
scrollView(diningRoom,section3);

//second part
let carpainter=document.getElementById('carpainter');//sec1 of p
let section4 = document.querySelector(".section4");//section 4
scrollView(carpainter,section4);

//third part
let allfurnitures=document.getElementById('allfurnitures');// p of sec2
let section2=document.querySelector('.section2')//section2
scrollView(allfurnitures,section2);

//fourth part
let collection =document.getElementById('collection');// p of sec2
let section1=document.querySelector('.section1');//section1
scrollView(collection,section1);

//fift part
let livingRoom=document.getElementById('livingRoom');//p of sec2
let section6=document.querySelector('.section6');//section6
scrollView(livingRoom,section6);


//for mobile screen 
let mobileDiningRoom = document.getElementById("MdiningRoom");
let mobileCarpainter = document.getElementById("Mcarpainter");
let mobileAllfurnitures = document.getElementById("MlivingRoom"); 
// let mobileCollection = document.getElementById("MCollection");
let mobileLivingRoom = document.getElementById("MlivingRoom");

scrollView(mobileDiningRoom,section3);
scrollView(mobileCarpainter,section4);
scrollView(mobileLivingRoom,section6);
scrollView(mobileAllfurnitures,section2);
