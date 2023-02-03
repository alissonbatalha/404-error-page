const menuIcon = document.querySelector('.menu-mobile');

const menu = document.querySelector('.nav__menu');

menuIcon.addEventListener('click', () => {
	menuIcon.classList.toggle('active');
	
  menu.classList.toggle('active');
});

