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

const contactForm = document.querySelector('.form');
const emailInput = document.querySelector('.email_address');
const validationMessage = document.querySelector('.validation_message');

contactForm.addEventListener('submit', (event) => {
  const emailAddressInput = emailInput.value;
  if (/[A-Z]/.test(emailAddressInput)) {
    validationMessage.innerHTML = 'Your Email Address should not contain Upper Case letters';
    validationMessage.classList.add('shake');
    event.preventDefault();
  }
});