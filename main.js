// NAVBAR 
const menBtn = document.getElementById('menu-btn');
const navbar = document.getElementById('navbar');
const menu = document.querySelector('.menu')
const offset = 50;

menBtn.addEventListener('click', () => {
    menu.classList.toggle('menu-open');
});

/*menu.addEventListener('click', () => {
    menu.classList.remove('menu');
});*/

window.addEventListener("scroll", () => {
    if (pageYOffset > offset) {
        navbar.classList.add('navbar-active');
    } else {
        navbar.classList.remove('navbar-active');
    }
});

// Email JS
function validate() {
    let name = document.querySelector(".name");
    let email = document.querySelector(".email");
    let msg = document.querySelector(".message");
    let sendBtn = document.querySelector(".send-btn");

    sendBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (name.value == "" || email.value == "" || msg.value == "") {
            emptyerror();
        } else {
            sendmail(name.value, email.value, msg.value);
            success();
            name.value = "";
            email.value = "";
            msg.value = "";
        }
    });
}
validate();

function sendmail(name, email, msg) {
    emailjs.send("service_b6wk3ux","template_e9w7mw8",{
        to_name: email,
        from_name: name,
        message: msg,
        });
}

function emptyerror() {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Fields can not be empty!',
        showConfirmButton: false,
        timer: 1000
      })
}
function success() {
    Swal.fire({
        title: "Email sent successfully",
        text: "We try to reply in 24 hours",
        icon: "success",
        showConfirmButton: false,
        timer: 1000
    })
}

// Scroll Top
let scrollTop = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {
    scrollTop.classList.toggle("scroll-active", window.scrollY >= 400);
});

// serach bar

document.querySelector('#search-input').addEventListener('input', filterList);

function filterList() {
    const searchInput = document.querySelector('#search-input');
    const filter = searchInput.value.toLowerCase();
    const listItems = document.querySelectorAll('.categories-data');

    listItems.forEach((item) => {
        let text = item.textContent
        if (text.toLowerCase().include(filter.toLowerCase())){
            item.style.display = ''
        } else {
            item.style.display = 'none';
        }
    });
}