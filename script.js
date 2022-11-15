const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('#mobile-navbar');
const mobileMenuList = document.querySelector('#mobile-menu-list');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  mobileMenuList.classList.toggle('hide-mobile-menu');
});

document.querySelectorAll('.hide-mobile-menu').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
  mobileMenuList.classList.remove('hide-mobile-menu');
}));

document.querySelectorAll('.hide-mobile-menu').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.add('active');
  navMenu.classList.add('active');
  mobileMenuList.classList.add('hide-mobile-menu');
}));