const footerPart = document.querySelector('footer');
footerPart.innerHTML = footerPart.innerHTML + new Date().getFullYear();

// function OnClickContactsLink() {
//   window.location.href = '/contacts.html';
// }
// const ContactsButton = document.querySelector('.contact-link');
// ContactsButton.addEventListener('click', OnClickContactsLink);

// function OnClickAboutLink() {
//   window.location.href = '/index.html';
// }
// const AboutButton = document.querySelector('.about-link');
// AboutButton.addEventListener('click', OnClickAboutLink);

const projectingCard = document.querySelector('.projectingCard');
projectingCard.addEventListener('click', onClickProjectingCard);
function onClickProjectingCard() {
  window.location.href = '/projektavimas.html';
}
const implementingCard = document.querySelector('.implementingCard');
implementingCard.addEventListener('click', onClickImplementingCard);
function onClickImplementingCard() {
  window.location.href = '/montavimas.html';
}

const serviceCard = document.querySelector('.serviceCard');
serviceCard.addEventListener('click', onClickServiceCard);
function onClickServiceCard() {
  window.location.href = '/technine-prieziura.html';
}
