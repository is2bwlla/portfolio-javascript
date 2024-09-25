const hamburguer = document.querySelector('.hamburguer');
const navLinks = document.querySelector('.nav-links');

hamburguer.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});