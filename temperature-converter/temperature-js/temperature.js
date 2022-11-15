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

const temperature = document.querySelector('#amount');
const convertFrom = document.querySelector('#from');
const convertTo = document.querySelector('#to');
const formular = document.querySelector('.content');
const result = document.querySelector('#result');
const selectElem = document.querySelectorAll('select');

const hints = [{
        // 0
        sameUnit: 'gives the same value'
    },
    {
        // 1 rankin to reamur
        R_r: '(°R - 491.67) * 0.44444'
    },
    {
        // 2 rankin to fahrenheit
        R_f: '(°R - 491.67) + 32.00'
    },
    {
        // 3 rankin to kelvin
        R_k: '(°R - 491.67) / 1.8000 + 273.15'
    },
    {
        // 4 rankin to celcius
        R_c: '(°R - 491.67) / 1.8000'
    },
    {
        // 5 reamur to rankin
        r_R: '(°r * 2.2500) + 491.67'
    },
    {
        // 6 reamur to fahrenheit
        r_f: '(°R * 2.2500) + 32.00'
    },
    {
        // 7 reamur to kelvin
        r_k: '(°R * 1.2500) + 273.15'
    },
    {
        // 8 reamur to celcius
        r_c: '°R / 0.80000'
    },
    {
        // 9 fahrenheit to rankin
        f_R: '(°F - 32) + 491.67'
    },
    {
        // 10 fahrenheit to reamur
        f_r: '(°F - 32) * 0.44444'
    },
    {
        // 11 fahrenheit to kelvin
        f_k: '(°F - 32) / 1.8000 + 273.15'
    },
    {
        // 12 fahrenheit to celcius
        f_c: '(°F - 32) / 1.8000'
    },
    {
        // 13 kelvin to rankin
        k_R: '(°K - 273.15) * 1.8000 + 491.67'
    },
    {
        // 14 kelvin to reamur
        k_r: '(°K - 273.15) * 0.8'
    },
    {
        // 15 kelvin to fahrenheit
        k_f: '(°K - 273.15) * 1.8000 + 32.00'
    },
    {
        // 16 kelvin to celcius
        k_c: '°K - 273.15'
    },
    {
        // 17 celcius to rankin
        c_R: '(°C * 1.8000) + 491.67'
    },
    {
        // 18 celcius to reamur
        c_r: '°C * 0.8'
    },
    {
        // 19 celcius to fahrenheit
        c_f: '(°C * 1.8000) + 32.00'
    },
    {
        // 20 celcius to kelvin
        c_k: '°C + 273.15'
    }
];


const units = [
    'reamur',
    'fahrenheit',
    'kelvin',
    'celcius'
];


for (let i = 3; i >= 0; i--) {
    let option = `<option value=${units[i]}>${units[i]}</option>`;
    selectElem[0].firstElementChild.insertAdjacentHTML('afterend', option);
}
for (let i = 3; i >= 0; i--) {
    let option = `<option value=${units[i]}>${units[i]}</option>`;
    selectElem[1].firstElementChild.insertAdjacentHTML('afterend', option);
}


function convertUnits() {
    if (
        (convertFrom.value === 'rankine') && (convertTo.value === 'rankine') ||
        (convertFrom.value === 'reamur') && (convertTo.value === 'reamur') ||
        (convertFrom.value === 'fahrenheit') && (convertTo.value === 'fahrenheit') ||
        (convertFrom.value === 'kelvin') && (convertTo.value === 'kelvin') ||
        (convertFrom.value === 'celcius') && (convertTo.value === 'celcius') 
    ) {
        result.value = temperature.value;
        formular.textContent = hints[0].sameUnit;
    } else if ((convertFrom.value === 'rankine') && (convertTo.value === 'reamur')) { 
        result.value = (temperature.value - 491.67) * 0.44444;
        formular.textContent = hints[1].R_r;
    } else if ((convertFrom.value === 'rankine') && (convertTo.value === 'fahrenheit')) { 
        result.value = (temperature.value - 491.67) + 32.00;
        formular.textContent = hints[2].R_f;
    } else if ((convertFrom.value === 'rankine') && (convertTo.value === 'kelvin')) { 
        result.value = (temperature.value - 491.67) / 1.8000 + 273.15;
        formular.textContent = hints[3].R_k;
    }  else if ((convertFrom.value === 'rankine') && (convertTo.value === 'celcius')) { 
        result.value = (temperature.value - 491.67) / 1.8000;
        formular.textContent = hints[4].R_c;
    } else if ((convertFrom.value === 'reamur') && (convertTo.value === 'rankine')) {
        result.value = (temperature.value * 2.2500) + 491.67;
        formular.textContent = hints[5].r_R;
    } else if ((convertFrom.value === 'reamur') && (convertTo.value === 'fahrenheit')) {
        result.value = (temperature.value * 2.2500) + 32.00;
        formular.textContent = hints[6].r_f;
    } else if ((convertFrom.value === 'reamur') && (convertTo.value === 'kelvin')) {
        result.value = (temperature.value * 1.2500) + 273.15;
        formular.textContent = hints[7].r_k;
    } else if ((convertFrom.value === 'reamur') && (convertTo.value === 'celcius')) {
        result.value = temperature.value / 0.80000;
        formular.textContent = hints[8].r_c;
    } else if ((convertFrom.value === 'fahrenheit') && (convertTo.value === 'rankine')) {
        result.value = (temperature.value - 32) + 491.67;
        formular.textContent = hints[9].f_R;
    } else if ((convertFrom.value === 'fahrenheit') && (convertTo.value === 'reamur')) {
        result.value = (temperature.value - 32) * 0.44444;
        formular.textContent = hints[10].f_r;
    } else if ((convertFrom.value === 'fahrenheit') && (convertTo.value === 'kelvin')) {
        result.value = (temperature.value - 32 ) / 1.8000 + 273.15;
        formular.textContent = hints[11].f_k;
    } else if ((convertFrom.value === 'fahrenheit') && (convertTo.value === 'celcius')) {
        result.value = (temperature.value - 32 ) / 1.8000;
        formular.textContent = hints[12].f_c;
    } else if ((convertFrom.value === 'kelvin') && (convertTo.value === 'rankine')) {
        result.value = (temperature.value - 273.15 ) * 1.8000 + 491.67;
        formular.textContent = hints[13].k_R;
    } else if ((convertFrom.value === 'kelvin') && (convertTo.value === 'reamur')) {
        result.value = (temperature.value - 273.15) * 0.8;
        formular.textContent = hints[14].k_r;
    } else if ((convertFrom.value === 'kelvin') && (convertTo.value === 'fahrenheit')) {
        result.value = (temperature.value - 273.15) * 1.8000 + 32.00;
        formular.textContent = hints[15].k_f;
    } else if ((convertFrom.value === 'kelvin') && (convertTo.value === 'celcius')) {
        result.value = temperature.value - 273.15
        formular.textContent = hints[16].k_c;
    } else if ((convertFrom.value === 'celcius') && (convertTo.value === 'rankine')) {
        result.value = (temperature.value * 1.8000) + 491.67;
        formular.textContent = hints[17].c_R;
    } else if ((convertFrom.value === 'celcius') && (convertTo.value === 'reamur')) {
        result.value = temperature.value * 0.8;
        formular.textContent = hints[18].c_r;
    } else if ((convertFrom.value === 'celcius') && (convertTo.value === 'fahrenheit')) {
        result.value = (temperature.value * 1.8000) + 32.00;
        formular.textContent = hints[19].c_f;
    } else if ((convertFrom.value === 'celcius') && (convertTo.value === 'kelvin')) {
        result.value = temperature.value + 273.15;
        formular.textContent = hints[20].c_k;
    }
}

convertFrom.addEventListener('change', convertUnits);
convertTo.addEventListener('change', convertUnits);
temperature.addEventListener('input', convertUnits);