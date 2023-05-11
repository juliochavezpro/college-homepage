const toggleButton = document.getElementsByClassName('toggle-button')[0]
const menuMobileDropdown = document.getElementsByClassName('menu-mobile')[0]

toggleButton.addEventListener('click', () => {
  menuMobileDropdown.classList.toggle('active')
})