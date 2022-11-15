// NAVBAR 
const menBtn = document.getElementById('menu-btn');
const navbar = document.getElementById('navbar');
const menu = document.querySelector('.menu');
const offset = 50;

menBtn.addEventListener('click', () => {
    menu.classList.toggle('menu-open');
});

function myFunction() {
    document.getElementById("nav-top-active").style.display = "none";
}

// window.addEventListener("scroll", () => {
//     if (pageYOffset > offset) {
//         navbar.classList.add('navbar-active');
//     } else {
//         navbar.classList.remove('navbar-active');
//     }
// });

let output = document.querySelector('.output'),
    hexContent = document.querySelector('.hex-content'),
    outputColor;

document.querySelector('.convert-btn').addEventListener('click', () => {
    let r = document.getElementById('red').value || 0,
        g = document.getElementById('green').value || 0,
        b = document.getElementById('blue').value || 0;
    outputColor = '#' + [r,g,b].map( x=> parseInt(x).toString(16).padStart(2, 0)).join('').toUpperCase('.output');
    output.innerHTML = outputColor;
    hexContent.style.background = outputColor;   
})