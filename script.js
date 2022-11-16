const navMenu = document.querySelector('.mobile-menu');
const headerItem = document.getElementsByClassName('header-item');
const cancelIcon = document.querySelector('.cancel');
const menuItem = document.getElementsByClassName('mobile-menu-items');
const hamburger = document.querySelector('.header-navbar');

hamburger.addEventListener('click', () => {
  Array.from(headerItem).forEach((element) => {
    element.classList.toggle('active');
  });
  navMenu.classList.toggle('active');
});

cancelIcon.addEventListener('click', () => {
  Array.from(headerItem).forEach((element) => {
    element.classList.toggle('active');
  });
  navMenu.classList.toggle('active');
});

Array.from(menuItem).forEach((element) => {
  element.addEventListener('click', () => {
    Array.from(headerItem).forEach((element) => {
      element.classList.toggle('active');
    });
    navMenu.classList.toggle('active');
  });
});
