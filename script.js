// =============================
// TYPING ANIMATION
// =============================

const text = "Software Developer";
let index = 0;
let deleting = false;
const typing = document.querySelector(".typing");

function typeEffect() {

if (!typing) return;

if (!deleting) {
typing.textContent = text.slice(0, index++);
if (index > text.length) deleting = true;
}
else {
typing.textContent = text.slice(0, index--);
if (index === 0) deleting = false;
}

setTimeout(typeEffect, deleting ? 80 : 120);
}

typeEffect();


// =============================
// SCROLL REVEAL ANIMATION
// =============================

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll(){

reveals.forEach(el => {

const top = el.getBoundingClientRect().top;
const windowHeight = window.innerHeight;

if(top < windowHeight - 100){
el.classList.add("active");
}

});

}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();


// =============================
// SKILLS ANIMATION
// =============================

const skillPills = document.querySelectorAll(".skill-pill");

function revealSkills(){

skillPills.forEach((pill,index)=>{

const rect = pill.getBoundingClientRect().top;
const screenHeight = window.innerHeight - 100;

if(rect < screenHeight){

setTimeout(()=>{
pill.classList.add("show");
},index * 80)

}

})

}

window.addEventListener("scroll", revealSkills);
revealSkills();


// =============================
// EDUCATION ANIMATION
// =============================

document.addEventListener("DOMContentLoaded", () => {

const eduCards = document.querySelectorAll(".edu-card");

const observer = new IntersectionObserver((entries)=>{

entries.forEach((entry,index)=>{

if(entry.isIntersecting){

setTimeout(()=>{
entry.target.classList.add("show");
}, index * 200)

}

})

},{threshold:0.2})

eduCards.forEach(card => observer.observe(card));

});


// =============================
// PROJECTS DATA
// =============================

const projects = [

{
title:"E-Shop – Online Shopping Web Application",
description:"Developed a responsive online shopping web application using React.js and Tailwind CSS, implemented authentication, cart and wishlist features with REST API integration and deployed on Vercel.",
tech:"React, Tailwind CSS, Redux Toolkit, Netlify",
img:"images/project1.png",
live:"https://e-shop-zeta-murex.vercel.app/",
code:"https://github.com/Avantiiika25/e-shop"
},

];

const projectsContainer = document.getElementById("projectsContainer");

if(projectsContainer){

projects.forEach(project=>{

projectsContainer.innerHTML += `
<div class="project-card">

<div class="project-img">
<img src="${project.img}" alt="${project.title}">
</div>

<div class="project-content">
<h3>${project.title}</h3>
<p>${project.description}</p>

<p class="project-tech">${project.tech}</p>

<div class="project-buttons">
<a href="${project.live}" target="_blank" class="btn-live">See Live</a>
<a href="${project.code}" target="_blank" class="btn-code">Source Code</a>
</div>

</div>

</div>
`;

})

}


// =============================
// CERTIFICATIONS DATA
// =============================

const certs = [

{title:"Microsoft Student Ambassador", img:"images/cert1.jpg"},
{title:"Google Developer Group", img:"images/cert2.jpg"},
{title:"Recipe API Backend Development - DevTown", img:"images/cert3.jpg"},
{title:"Udemy Full Stack Development", img:"images/cert4.jpg"}

];

const certContainer = document.getElementById("certContainer");

if(certContainer){

certs.forEach(c=>{

certContainer.innerHTML += `
<div class="cert-card">

<img src="${c.img}" alt="${c.title}">

<div class="cert-content">
<h3>${c.title}</h3>
</div>

</div>
`;

})

}


// =============================
// CONTACT POPUP
// =============================

const floatingBtn = document.getElementById("floatingBtn");
const popup = document.getElementById("contactPopup");
const closeBtn = document.getElementById("closePopup");
const successPopup = document.getElementById("successPopup");

if(floatingBtn){

floatingBtn.onclick = ()=>{
popup.classList.add("show");
}

}

if(closeBtn){

closeBtn.onclick = ()=>{
popup.classList.remove("show");
}

}

const contactForm = document.getElementById("contactForm");

if(contactForm){

contactForm.addEventListener("submit",(e)=>{

e.preventDefault();

popup.classList.remove("show");
successPopup.classList.add("show");

setTimeout(()=>{
successPopup.classList.remove("show");
},2000)

})

}


// =============================
// FOOTER SCROLL ANIMATION
// =============================

const footerCenter = document.querySelector(".footer-center");

window.addEventListener("scroll", ()=>{

if(!footerCenter) return;

const rect = footerCenter.getBoundingClientRect().top;

if(rect < window.innerHeight - 100){
footerCenter.classList.add("show");
}

})


// =============================
// SCROLL PROGRESS BAR
// =============================

const progress = document.querySelector(".scroll-progress");

window.addEventListener("scroll", ()=>{

if(!progress) return;

const scrollTop = document.documentElement.scrollTop;

const height =
document.documentElement.scrollHeight -
document.documentElement.clientHeight;

progress.style.width = (scrollTop / height) * 100 + "%";

})


// =============================
// CURSOR GLOW EFFECT
// =============================

const cursor = document.querySelector(".cursor");
const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", e=>{

if(cursor){
cursor.style.left = e.clientX + "px";
cursor.style.top = e.clientY + "px";
}

if(glow){
glow.style.left = e.clientX - 12 + "px";
glow.style.top = e.clientY - 12 + "px";
}

})


// =============================
// HAMBURGER MENU
// =============================

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if(hamburger){

hamburger.addEventListener("click",()=>{

navLinks.classList.toggle("active");

})

}


// =============================
// CLOSE NAV ON CLICK (MOBILE)
// =============================

document.querySelectorAll(".nav-links a").forEach(link=>{

link.addEventListener("click",()=>{

if(navLinks){
navLinks.classList.remove("active");
}

})

})


// =============================
// BACK TO TOP SMOOTH
// =============================

const backTopBtn = document.querySelector(".back-to-top button");

if(backTopBtn){

backTopBtn.addEventListener("click",()=>{

window.scrollTo({
top:0,
behavior:"smooth"
})

})

}