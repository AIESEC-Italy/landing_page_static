
document.addEventListener("DOMContentLoaded", function() {
  const navbar = document.querySelector('.navbar');
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {  // Adjust the scroll position as needed
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
});

let mobNav = document.querySelector('#dropdown-head-mob');
let mobNav_menu = document.getElementById('mob-dropdown');
let cover = document.querySelector('.list-cover');
mobNav.addEventListener('click', () => {
  if(cover.style.transform == "translateY(1px)")cover.style.transform = "translateY(110px)"
  else cover.style.transform = "translateY(1px)"
  
})

let hamburger = document.querySelector('.hamburger');
let mob = document.querySelector('.mobile-nav')
hamburger.addEventListener('click', () => {
  if(mob.style.display == "none"){
    mob.style.display = "block"; 
    setTimeout(() => {document.querySelector('.nav-content').style.transform= "translateX(100%)";}, 100)
  }
  else {
    setTimeout(() => {document.querySelector('.nav-content').style.transform= "translateX(-100%)";}, 100)
    mob.style.display = "none";
  }
})
document.querySelector('.nav-blocker').addEventListener('click', () => {
  setTimeout(() => {document.querySelector('.nav-content').style.transform= "translateX(-100%)";}, 100)
  mob.style.display = "none"
})
