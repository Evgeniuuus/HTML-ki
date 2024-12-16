function make_transparent() {
 send_btn.style.backgroundColor = 'transparent'
}
function make_colorful() {
 send_btn.style.backgroundColor = '#C2AB99'
}
function change_theme () {
	let theme = document.querySelector('header')
	theme.style.background = 'url(bg_space.png)'
	
}
let send_btn = document.querySelector('.submit-btn-send')
send_btn.addEventListener('mouseover', make_transparent)
send_btn.addEventListener('mouseout', make_colorful)

let change_btn = document.querySelector('.switch-theme-button')
change_btn.addEventListener('click', change_theme)