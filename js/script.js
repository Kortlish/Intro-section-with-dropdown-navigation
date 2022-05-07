const burgerOpen = document.querySelector('.burger-btn-open');
const burgerClose = document.querySelector('.burger-btn-close');

const navBox = document.querySelector('.nav__box');

const windowShadow = document.querySelector('.window-shadow');

const mobileHero = document.querySelector('.hero-mobile')
const desktopHero = document.querySelector('.hero-desktop')

function showNav() {
	navBox.classList.add('active');
	burgerClose.classList.add('show');
	burgerOpen.classList.add('hide');
	windowShadow.classList.add('active');
}
function hideNav() {
	navBox.classList.remove('active');
	burgerClose.classList.remove('show');
	burgerOpen.classList.remove('hide');
	windowShadow.classList.remove('active');
}


burgerOpen.addEventListener('click', showNav);
burgerClose.addEventListener('click', hideNav);
document.addEventListener('click', (e) => {
	const isDropdownButton = e.target.matches('.to-drop');
	if (!isDropdownButton && e.target.closest('[data-dropdown]') != null) return;

    let arrowUp
    let arrowDown
	let currentDropdown;
	if (isDropdownButton) {
		currentDropdown = e.target.closest('[data-dropdown]');
		arrowUp = currentDropdown.querySelector('.arrow-up');
		arrowDown = currentDropdown.querySelector('.arrow-down');
		currentDropdown.classList.toggle('active');
        arrowUp.classList.toggle('active');
		arrowDown.classList.toggle('active');
	}

	document.querySelectorAll('[data-dropdown].active').forEach((dropdown) => {
		if (dropdown === currentDropdown) return;
		dropdown.classList.remove('active');
		arrowUp = dropdown.querySelector('.arrow-up');
		arrowDown = dropdown.querySelector('.arrow-down');
		console.log(arrowUp, arrowDown);
		arrowUp.classList.toggle('active');
		arrowDown.classList.toggle('active');
	});
});
