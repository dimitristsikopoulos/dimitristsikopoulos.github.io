const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

 
  burger.addEventListener("click", () => {
    // Toggle Nav
    nav.classList.toggle("nav-active");
    // Burger animation
    burger.classList.toggle("toggle");
  });
 
  // Animate links
  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${index/7+0.6}s`;
    }
  });
 
 
     //Animate back on link click
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.toggle("nav-active");
      burger.classList.toggle("toggle");
    });
  });
  
 


};
navSlide();


//Typing effect
let arr = ["Websites", "Applications", "UI/UX Designs"];
let i = 0;
let count = 0;
let text = "";
function typping() {
  if (count == arr.length) {
    count = 0;
  }

  text = arr[count].slice(0, ++i);
  document.getElementById("typing").innerHTML = text;
  if (text.length === arr[count].length) {
    count++;
    i = 0;
  }
  setTimeout(typping, 250);
}

typping();
