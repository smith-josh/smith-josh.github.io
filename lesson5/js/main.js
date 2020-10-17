const menu_toggle = document.getElementById("menu-toggle");
const nav = document.getElementById('nav');
const menu_close = document.getElementById("menu-close")

menu_toggle.addEventListener('click', () => {
    nav.classList.toggle("responsive");
}, false);

menu_close.addEventListener('click', () => {
    nav.classList.toggle("responsive");
}, false);