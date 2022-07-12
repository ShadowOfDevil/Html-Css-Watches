/* ===== RESIZE NAVBAR ON SCROLL ===== */
var navbar = document.querySelector('.navbar');
// when the scroll is heigher than 20 viewport height, add the sticky class to the navbar
window.onscroll = () => {
    this.scrollY > 20 ? navbar.classList.add('sticky') : navbar.classList.remove('sticky');
}


/* ===== NAVBAR TOGGLE ===== */
const navMenu = document.querySelector('.menu');
const navToggle = document.querySelector('.menu-btn');

if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('open');
    })
}

// close menu when navlink is clicked
const navLink = document.querySelectorAll('.nav-link');
function linkAction() {
    navMenu.classList.remove('open');
}

navLink.forEach(nl => nl.addEventListener('click', linkAction))


/* ===== PRODUCT COLOR ===== */
var pic = document.querySelector('#main-show');
const colors = document.querySelectorAll('.color');

// store product info in object
var info = [
    {
        src: 'images/products/blue.png'
    },
    {
        src: 'images/products/purple.png'
    },
    {
        src: 'images/products/cyan.png'
    },
    {
        src: 'images/products/pink.png'
    },
    {
        src: 'images/products/green.png'
    },
    {
        src: 'images/products/red.png'
    },
];

// change color
colors.forEach( (color, key) => {
    color.addEventListener('click', function() {
        // remove active class from color
        colors.forEach(c => c.classList.remove('active'));

        // change image src and add active class to seleted color
        pic.src = info[key].src;
        this.classList.add('active');
    })
})