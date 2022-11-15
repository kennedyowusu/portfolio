const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("#navbar");



hamburger.addEventListener("click", () => {
 hamburger.classList.toggle("active");
 navMenu.classList.toggle("active");
 console.log(navMenu);
})

document.querySelectorAll(".header-nav").forEach(n=> n.addEventListener("click", () => {
 hamburger.classList.remove("active");
 navMenu.classList.remove("active");
}))