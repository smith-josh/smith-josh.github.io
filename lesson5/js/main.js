const menu_toggle = document.getElementById("menu-toggle");
const nav = document.getElementById('nav');
const menu_close = document.getElementById("menu-close")

menu_toggle.addEventListener('click', () => {
    nav.classList.toggle("responsive");
}, false);

const banner = document.getElementById("banner");


function setBannerDisplay() {
    let time = new Date()
    if (time.getDay() == 6) {
        banner.classList.toggle("show");
    }
    console.log(time.getDay())
}

document.addEventListener('DOMContentLoaded', setBannerDisplay)