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

window.addEventListener("scroll", () => {
    if (pageYOffset > offset) {
        navbar.classList.add('navbar-active');
    } else {
        navbar.classList.remove('navbar-active');
    }
});



const form = document.querySelector("form");
const binaryForm = document.querySelector(".binary-form");
const output = document.querySelector("#output");
const input = document.querySelector("#input");
const switch1 = document.querySelector(".switch");
const title = document.querySelector(".title-txt");
const copy = document.querySelector(".copy");

form.addEventListener("submit", (e) =>{
    e.preventDefault();
    // const inputValue = e.target.input.value;
    // const inputType = e.target.input.getAttribute("data-type");

    // convert(inputType, inputValue);
});

binaryForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputValue = e.target.input.value;
    const inputType = e.target.input.getAttribute("data-type");

    convert(inputType, inputValue);
});

switch1.addEventListener("click", (e) => {
    const type = e.target.getAttribute("data-type");
    const switch1V2 = document.querySelector(".switch")
    input.value = "";
    output.innerHTML = "";

    if (type === "binary"){
        /* e.target.setAttribute("data-type", "text"); */ 
        // e.target["data-type"] = "text"; <-- iki bakale error 🤯
        switch1V2.setAttribute("data-type", "text");
        input.setAttribute("data-type", "text");
        input.setAttribute("placeholder", "Input Plain Text...");
        // output.innerText = "Binary Output..."; <-- iki sg ngubah css e
        output.innerHTML = "<p>Binary Output...</p>"; // <-- kudune ngeneiki // gk usah gae document.createElement()
        title.innerText = "Text to Binary";
    } else if (type === "text") {
        e.target.setAttribute("data-type", "binary");
        input.setAttribute("data-type", "binary");
        input.setAttribute("placeholder", "Input Binary Code...");
        // output.innerText = "Text Output..."; <-- iki pisan
        output.innerHTML = "<p>Text Output...</p>"; 
        title.innerText = "Binary to Text";
    } 
});

function convert(type, inputValue){
    // nek kene
    if (!inputValue) return; 
    let outputValue = "";
    if (type === "binary"){
        outputValue = binaryToText(inputValue);
        console.log(output);
    } else if (type === "text"){
        outputValue = textToBinary(inputValue);
    }
    output.innerHTML = `<p>${outputValue}</p>`;
};

function binaryToText(input){
    let output = "";
    output = input
    .split(" ") // <--
    .map((number) => parseInt(number, 2))
    .map((number) => String.fromCharCode(number))
    .join(" "); // <--
    console.log(input);
    return output;
};

function textToBinary(input){
    let output = "";
    output = input
    .split("")
    .map((latter) => latter.charCodeAt(0))
    .map((latter) => latter.toString(2))
    .join(" ");
    console.log(output);
    return output;
};

copy.addEventListener("click", (e) => {
    copyOutput();
    e.target.innerHTML = '<ion-icon name="clipboard-outline"></ion-icon>';

    setTimeout(() => {
        e.target.innerHTML = '<ion-icon name="clipboard-outline"></ion-icon>';
    }, 1000);

});

function copyOutput(){
    const textarea = document.createElement("textarea");
    textarea.setAttribute("readonly", "");
    textarea.style.position = "absolute";
    textarea.style.top = "0";
    textarea.value = output.innerText;
    document.body.appendChild(textarea);
    textarea.select();
    textarea.setSelectionRange(0, 99999);
    document.execCommand("copy"); 
    document.body.removeChild(textarea);

    const Toast = Swal.mixin({
        toast: true,
        position: 'bottom-start',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'success',
        title: 'Copy successfully',
        text: 'Please Check the Clipboard!!'
      })
};