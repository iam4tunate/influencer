var navToggle, nav__toggle, nav__menu;
navToggle = document.getElementById('navToggle');
nav__toggle = document.querySelector('.nav__toggle');
nav__menu = document.querySelector('.nav__menu');
// body = document.querySelector('body');

navToggle.addEventListener('click', function () {
    //! Toggle Mobile Navigation
    document.querySelector('.nav__toggle').classList.toggle('open');

    //* Toggle Overlay
    if (nav__toggle.classList.contains('open')) {
        nav__menu.style.top = "0";
        nav__menu.classList.add('fade-in');
    } else {
        nav__menu.style.top = "-150%";
        nav__menu.classList.remove('fade-in');
    }
})

// var navMenuLinks = document.querySelectorAll('.nav__menu-link');
// navMenuLink.forEach(function (navMenuLink) {
//     nav__menu.style.top = "-100%";
// })
// .addEventListener('click', function () {
//     nav__menu.style.top = "-100%";
// })

function hide() {
    document.querySelector('.nav__toggle').classList.toggle('open');
    nav__menu.style.top = "-150%";
    nav__menu.classList.remove('fade-in');
}