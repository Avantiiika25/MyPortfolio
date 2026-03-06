// Typing Animation
const text = "Software Developer";
let index = 0;
let deleting = false;
const typing = document.querySelector(".typing");

function typeEffect() {
  if (!deleting) {
    typing.textContent = text.slice(0, index++);
    if (index > text.length) deleting = true;
  } else {
    typing.textContent = text.slice(0, index--);
    if (index === 0) deleting = false;
  }
  setTimeout(typeEffect, deleting ? 80 : 120);
}
typeEffect();

// Scroll Reveal
const reveals = document.querySelectorAll(".reveal");
window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});

// Projects
const projects = [
  {
    title: "E-Shop – Online Shopping Web Application",
    description: "Developed a responsive online shopping web application using React.js and Tailwind CSS, Implemented user authentication, cart, and wishlist features with REST API integration, deployed the application on Netlify and Render.",
    tech: "React, Tailwind CSS, Redux Toolkit, Netlify",
    img: "images/project1.png",
    live: "https://e-shop-zeta-murex.vercel.app/",
    code: "https://github.com/Avantiiika25/e-shop"
  },
  {
    title: "House Rental Web Application",
    description: "Built a web application using HTML, CSS, JavaScript, React.js, and MySQL, Implemented user login, property listing display, and booking interface with REST APIs, Developed CRUD functionality and deployed on Netlify and Vercel.",
    tech: "HTML, CSS, JavaScript, React.js, MySQL, Express.js, Vercel",
    img: "images/project2.png",
    live: "",
    code: "https://github.com/Avantiiika25"
  },
  {
    title: "Entertainment Web Application",
    description: "Developed a full-stack Entertainment web application to display movies and shows using REST API integration. Implemented dynamic routing, search functionality, and responsive UI with modern frontend technologies. Deployed the application on Vercel.",
    tech: "HTML, CSS, JavaScript, React.js, REST API, Vercel",
    img: "images/project3.png",
    live: "",
    code: "https://github.com/Avantiiika25/entertainment-app"
  },
  {
    title: "Get YouTube Subscribers Application",
    description: "Built a Node.js and Express.js based backend application to fetch and display YouTube subscriber data using MongoDB. Implemented multiple API endpoints for retrieving subscribers, integrated database operations, and tested APIs using Postman.",
    tech: "Node.js, Express.js, MongoDB, REST API, Postman",
    img: "images/project4.png",
    live: "",
    code: "https://github.com/Avantiiika25/get-youtube-subscribers"
  }
];

const projectsContainer = document.getElementById("projectsContainer");

projects.forEach(project => {
  projectsContainer.innerHTML += `
    <div class="project-card">
      <div class="project-img">
        <img src="${project.img}">
      </div>
      <div class="project-content">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <p class="project-tech">${project.tech}</p>
        <div class="project-buttons">
          <a href="${project.live}" class="btn-live">See Live</a>
          <a href="${project.code}" class="btn-code">Source Code</a>
        </div>
      </div>
    </div>
  `;
});

// Certifications
const certs = [
  {title:"Python & Java - Cisco", img:"images/cert1.jpg"},
  {title:"MERN Stack - IIT Guwahati", img:"images/cert2.jpg"},
  {title:"Accenture Developer Simulation", img:"images/cert3.jpg"},
  {title:"Udemy full Stack Devlopement", img:"images/cert4.jpg"}
];

const certContainer = document.getElementById("certContainer");

certs.forEach(c=>{
  certContainer.innerHTML += `
    <div class="cert-card">
      <img src="${c.img}">
      <div class="cert-content">
        <h3>${c.title}</h3>
        
      </div>
    </div>
  `;
});

// Contact Popup
const floatingBtn = document.getElementById("floatingBtn");
const popup = document.getElementById("contactPopup");
const closeBtn = document.getElementById("closePopup");
const successPopup = document.getElementById("successPopup");

floatingBtn.onclick = ()=> popup.classList.add("show");
closeBtn.onclick = ()=> popup.classList.remove("show");

document.getElementById("contactForm").addEventListener("submit", e=>{
  e.preventDefault();
  popup.classList.remove("show");
  successPopup.classList.add("show");

  setTimeout(()=>{
    successPopup.classList.remove("show");
  },2000);
});

document.addEventListener("DOMContentLoaded", () => {

  const eduCards = document.querySelectorAll(".edu-card");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("show");
        }, index * 200);
      }
    });
  }, { threshold: 0.2 });

  eduCards.forEach(card => observer.observe(card));

});

const skillPills = document.querySelectorAll(".skill-pill");

const revealSkills = () => {
  skillPills.forEach((pill, index) => {
    const rect = pill.getBoundingClientRect().top;
    const screenHeight = window.innerHeight - 100;

    if (rect < screenHeight) {
      setTimeout(() => {
        pill.classList.add("show");
      }, index * 80);
    }
  });
};

window.addEventListener("scroll", revealSkills);
revealSkills();
