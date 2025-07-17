const toggleMenu = document.getElementById('toggle-menu-mobile')
const navBar = document.querySelector('.nav-bar')

toggleMenu.addEventListener('click', () => {
	navBar.classList.toggle('open')
	toggleMenu.textContent = toggleMenu.textContent == '+' ? 'x' : '+'
})

document.addEventListener('click', (e) => {
	if (!toggleMenu.contains(e.target) && (!navBar.contains(e.target))) {
		navBar.classList.remove('open')
		toggleMenu.textContent = '+'
	}
})