// ==========================
// AOS Animation
// ==========================

AOS.init({
duration:1000,
once:true
});

// ==========================
// Typed JS
// ==========================

var typed = new Typed("#typing",{

strings:[
"Python Developer",
"Full Stack Developer",
"Software Engineer",
"CSE (Data Science) Student"
],

typeSpeed:70,
backSpeed:50,
backDelay:1500,
loop:true

});

// ==========================
// Navbar Background
// ==========================

window.addEventListener("scroll",function(){

const navbar=document.querySelector(".navbar");

if(window.scrollY>50){

navbar.style.background="#08111f";

}else{

navbar.style.background="rgba(8,17,31,.8)";

}

});

// ==========================
// Preloader
// ==========================

window.addEventListener("load",()=>{

const preloader=document.getElementById("preloader");

preloader.style.display="none";

});

// ==========================
// Active Navigation
// ==========================

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".nav-link");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-150;

const sectionHeight=section.clientHeight;

if(pageYOffset>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")=="#"+current){

link.classList.add("active");

}

});

});

// ==========================
// Back To Top Button
// ==========================

const btn=document.createElement("button");

btn.innerHTML="↑";

btn.id="topBtn";

document.body.appendChild(btn);

btn.style.position="fixed";
btn.style.bottom="30px";
btn.style.right="30px";
btn.style.width="50px";
btn.style.height="50px";
btn.style.border="none";
btn.style.borderRadius="50%";
btn.style.background="#4da3ff";
btn.style.color="#fff";
btn.style.fontSize="22px";
btn.style.cursor="pointer";
btn.style.display="none";
btn.style.zIndex="999";

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

btn.style.display="block";

}else{

btn.style.display="none";

}

});

btn.onclick=()=>{

window.scrollTo({

top:0,
behavior:"smooth"

});

};

// ==========================
// Scroll Progress Bar
// ==========================

const progress=document.createElement("div");

progress.id="progressBar";

document.body.appendChild(progress);

progress.style.position="fixed";
progress.style.top="0";
progress.style.left="0";
progress.style.height="4px";
progress.style.background="#4da3ff";
progress.style.zIndex="99999";

window.addEventListener("scroll",()=>{

const totalHeight=document.body.scrollHeight-window.innerHeight;

const progressWidth=(window.pageYOffset/totalHeight)*100;

progress.style.width=progressWidth+"%";

});

// ==========================
// Contact Form
// ==========================

const form=document.querySelector("form");

form.addEventListener("submit",function(e){

e.preventDefault();

alert("Thank you! Your message has been sent successfully.");

form.reset();

});