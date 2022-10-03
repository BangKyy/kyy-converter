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


const weight = document.querySelector('#amount');
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
        // 1 mg to ounce
        mg_o: 'Multiply the length by 0.000035274'
    },
    {
        // 2 mg to gram
        mg_g: 'Multiply the length by 0.001'
    },
    {
        // 3 mg to pound
        mg_p: 'Multiply the length by 0.000002204'
    },
    {
        // 4 mg to kilogram
        mg_kg: 'Multiply the length by 0.000001'
    },
    {
        // 5 mg to quintal
        mg_q: 'Multiply the length by 0.00000001'
    },
    {
        // 6 mg to ton
        mg_ton: 'Multiply the length by 0.000000001'
    },
    {
        // 7 ounce to miligram
        o_mg: 'Multiply the length by 28,350'
    },
    {
        // 8 ounce to gram
        o_g: 'Multiply the length by 28.349523'
    },
    {
        // 9 ounce to pound
        o_p: 'Multiply the length by 0.0625'
    },
    {
        // 10 ounce to kilogram
        o_kg: 'Multiply the length by 0.02835'
    },
    {
        // 11 ounce to quintal
        o_q: 'Multiply the length by 0.000283495'
    },
    {
        // 12 ounce to ton
        o_ton: 'Multiply the length by 0.00002835'
    },
    {
        // 13 gram to miligram
        g_mg: 'Multiply the length by 1000'
    },
    {
        // 14 gram to ounce
        g_o: 'Multiply the length by 0.035274'
    },
    {
        // 15 gram to pound
        g_p: 'Multiply the length by 0.002205'
    },
    {
        // 16 gram to kilogram
        g_kg: 'Multiply the length by 0.001'
    },
    {
        // 17 gram to quintal
        g_q: 'Multiply the length by 0.00001'
    },
    {
        // 18 gram to ton
        g_ton: 'Multiply the length by 0.0000011023'
    },
    {
        // 19 pound to miligram
        p_mg: 'Multiply the length by 453,592'
    },
    {
        // 20 pound to ounce
        p_o: 'Multiply the length by 16'
    },
    {
        // 21 pound to gram
        p_g: 'Multiply the length by 453.59237'
    },
    {
        // 22 pound to kilogram
        p_kg: 'Multiply the length by 0.453592'
    },
    {
        // 23 pound to quintal
        p_q: 'Multiply the length by 0.00453592'
    },
    {
        // 24 pound to ton
        p_ton: 'Multiply the length by 0.000453592'
    },
    {
        // 25 kilogram to miligram
        kg_mg: 'Multiply the length by 1,000,000'
    },
    {
        // 26 kilogram to ounce
        kg_o: 'Multiply the length by 35.273962'
    },
    {
        // 27 kilogram to gram
        kg_g: 'Multiply the length by 1,000'
    },
    {
        // 28 kilogram to pound
        kg_p: 'Multiply the length by 2.204623'
    },
    {
        // 29 kilogram to quintal
        kg_q: 'Multiply the length by 0.01'
    },
    {
        // 30 kilogram to ton
        kg_ton: 'Multiply the length by 0.001102'
    },
    {
        // 31 quintal to miligram
        q_mg: 'Multiply the length by 100,000,000'
    },
    {
        // 32 quintal to ounce
        q_o: 'Multiply the length by 3527.4'
    },
    {
        // 33 quintal to gram
        q_g: 'Multiply the length by 100,000'
    },
    {
        // 34 quintal to pound
        q_p: 'Multiply the length by 220.462'
    },
    {
        // 35 quintal to kilogram
        q_kg: 'Multiply the length by 100'
    },
    {
        // 36 quintal to ton
        q_ton: 'Multiply the length by 0.1'
    },
    {
        // 37 ton to miligram
        ton_mg: 'Multiply the length by 1,000,000,000'
    },
    {
        // 38 ton to ounce
        ton_o: 'Multiply the length by 35,274'
    },
    {
        // 39 ton to gram
        ton_g: 'Multiply the length by 1,000,000'
    },
    {
        // 40 ton to pound
        ton_p: 'Multiply the length by 2,205'
    },
    {
        // 41 ton to kilogram
        ton_kg: 'Multiply the length by 1,000'
    },
    {
        // 42 ton to quintal
        ton_q: 'Multiply the length by 10'
    },
];

const units = [
    'ounce',
    'gram',
    'pound',
    'kilogram',
    'quintal',
    'ton'
];

for (let i = 5; i>=0; i--) {
    let option = `<option value=${units[i]}>${units[i]}</option>`;
    selectElem[0].firstElementChild.insertAdjacentHTML('afterend', option);
}
for (let i = 5; i>=0; i--) {
    let option = `<option value=${units[i]}>${units[i]}</option>`;
    selectElem[1].firstElementChild.insertAdjacentHTML('afterend', option);
}

function convertUnits() {
    if (
        (convertFrom.value === 'miligram') && (convertTo.value === 'miligram') ||
        (convertFrom.value === 'ounce') && (convertTo.value === 'ounce') ||
        (convertFrom.value === 'gram') && (convertTo.value === 'gram') ||
        (convertFrom.value === 'pound') && (convertTo.value === 'pound') ||
        (convertFrom.value === 'kilogram') && (convertTo.value === 'kilogram') ||
        (convertFrom.value === 'quintal') && (convertTo.value === 'quintal') ||
        (convertFrom.value === 'ton') && (convertTo.value === 'ton') 
    ) {
        result.value = weight.value;
        formular.textContent = hints[0].sameUnit;
    } else if ((convertFrom.value === 'miligram') && (convertTo.value === 'ounce')) { 
        result.value = weight.value * 0.000035274;
        formular.textContent = hints[1].mg_o;
    } else if ((convertFrom.value === 'miligram') && (convertTo.value === 'gram')) { 
        result.value = weight.value * 0.001;
        formular.textContent = hints[2].mg_g;
    } else if ((convertFrom.value === 'miligram') && (convertTo.value === 'pound')) { 
        result.value = weight.value * 0.000002204;
        formular.textContent = hints[3].mg_p;
    } else if ((convertFrom.value === 'miligram') && (convertTo.value === 'kilogram')) { 
        result.value = weight.value * 0.000001;
        formular.textContent = hints[4].mg_kg;
    } else if ((convertFrom.value === 'miligram') && (convertTo.value === 'quintal')) { 
        result.value = weight.value * 0.00000001;
        formular.textContent = hints[5].mg_q;
    } else if ((convertFrom.value === 'miligram') && (convertTo.value === 'ton')) { 
        result.value = weight.value * 0.000000001;
        formular.textContent = hints[6].mg_ton;
    } else if ((convertFrom.value === 'ounce') && (convertTo.value === 'miligram')) { 
        result.value = weight.value * 28350;
        formular.textContent = hints[7].o_mg;
    } else if ((convertFrom.value === 'ounce') && (convertTo.value === 'gram')) { 
        result.value = weight.value * 28.349523;
        formular.textContent = hints[8].o_g;
    } else if ((convertFrom.value === 'ounce') && (convertTo.value === 'pound')) { 
        result.value = weight.value * 0.0625;
        formular.textContent = hints[9].o_p;
    } else if ((convertFrom.value === 'ounce') && (convertTo.value === 'kilogram')) { 
        result.value = weight.value * 0.02835;
        formular.textContent = hints[10].o_kg;
    } else if ((convertFrom.value === 'ounce') && (convertTo.value === 'quintal')) { 
        result.value = weight.value * 0.000283495;
        formular.textContent = hints[11].o_q;
    } else if ((convertFrom.value === 'ounce') && (convertTo.value === 'ton')) { 
        result.value = weight.value * 0.00002835;
        formular.textContent = hints[12].o_ton;
    } else if ((convertFrom.value === 'gram') && (convertTo.value === 'miligram')) { 
        result.value = weight.value * 1000;
        formular.textContent = hints[13].g_mg;
    } else if ((convertFrom.value === 'gram') && (convertTo.value === 'ounce')) { 
        result.value = weight.value * 0.035274;
        formular.textContent = hints[14].g_o;
    } else if ((convertFrom.value === 'gram') && (convertTo.value === 'pound')) { 
        result.value = weight.value * 0.002205;
        formular.textContent = hints[15].g_p;
    } else if ((convertFrom.value === 'gram') && (convertTo.value === 'kilogram')) { 
        result.value = weight.value * 0.001;
        formular.textContent = hints[16].g_kg;
    } else if ((convertFrom.value === 'gram') && (convertTo.value === 'quintal')) { 
        result.value = weight.value * 0.00001;
        formular.textContent = hints[17].g_q;
    } else if ((convertFrom.value === 'gram') && (convertTo.value === 'ton')) { 
        result.value = weight.value * 0.0000011023;
        formular.textContent = hints[18].g_ton;
    } else if ((convertFrom.value === 'pound') && (convertTo.value === 'miligram')) { 
        result.value = weight.value * 453592;
        formular.textContent = hints[19].p_mg;
    }  else if ((convertFrom.value === 'pound') && (convertTo.value === 'ounce')) { 
        result.value = weight.value * 16;
        formular.textContent = hints[20].p_o;
    }  else if ((convertFrom.value === 'pound') && (convertTo.value === 'gram')) { 
        result.value = weight.value * 453.59237;
        formular.textContent = hints[21].p_g;
    }  else if ((convertFrom.value === 'pound') && (convertTo.value === 'kilogram')) { 
        result.value = weight.value * 0.453592;
        formular.textContent = hints[22].p_kg;
    }  else if ((convertFrom.value === 'pound') && (convertTo.value === 'quintal')) { 
        result.value = weight.value * 0.00453592;
        formular.textContent = hints[23].p_q;
    }  else if ((convertFrom.value === 'pound') && (convertTo.value === 'ton')) { 
        result.value = weight.value * 0.000453592;
        formular.textContent = hints[24].p_ton;
    }  else if ((convertFrom.value === 'kilogram') && (convertTo.value === 'miligram')) { 
        result.value = weight.value * 1000000;
        formular.textContent = hints[25].kg_mg;
    } else if ((convertFrom.value === 'kilogram') && (convertTo.value === 'ounce')) { 
        result.value = weight.value * 35.273962;
        formular.textContent = hints[26].kg_o;
    } else if ((convertFrom.value === 'kilogram') && (convertTo.value === 'gram')) { 
        result.value = weight.value * 1000;
        formular.textContent = hints[27].kg_g;
    } else if ((convertFrom.value === 'kilogram') && (convertTo.value === 'pound')) { 
        result.value = weight.value * 2.204623;
        formular.textContent = hints[28].kg_p;
    } else if ((convertFrom.value === 'kilogram') && (convertTo.value === 'quintal')) { 
        result.value = weight.value * 0.01;
        formular.textContent = hints[29].kg_q;
    } else if ((convertFrom.value === 'kilogram') && (convertTo.value === 'ton')) { 
        result.value = weight.value * 0.001102;
        formular.textContent = hints[30].kg_ton;
    } else if ((convertFrom.value === 'quintal') && (convertTo.value === 'miligram')) { 
        result.value = weight.value * 100000000;
        formular.textContent = hints[31].q_mg;
    } else if ((convertFrom.value === 'quintal') && (convertTo.value === 'ounce')) { 
        result.value = weight.value * 3527.4;
        formular.textContent = hints[31].q_o;
    } else if ((convertFrom.value === 'quintal') && (convertTo.value === 'gram')) { 
        result.value = weight.value * 100000;
        formular.textContent = hints[31].q_g;
    } else if ((convertFrom.value === 'quintal') && (convertTo.value === 'pound')) { 
        result.value = weight.value * 220.462;
        formular.textContent = hints[31].q_p;
    } else if ((convertFrom.value === 'quintal') && (convertTo.value === 'kilogram')) { 
        result.value = weight.value * 100;
        formular.textContent = hints[31].q_kg;
    } else if ((convertFrom.value === 'quintal') && (convertTo.value === 'ton')) { 
        result.value = weight.value * 0.1;
        formular.textContent = hints[36].q_ton;
    } else if ((convertFrom.value === 'ton') && (convertTo.value === 'miligram')) { 
        result.value = weight.value * 1000000000;
        formular.textContent = hints[37].ton_mg;
    } else if ((convertFrom.value === 'ton') && (convertTo.value === 'ounce')) { 
        result.value = weight.value * 35274;
        formular.textContent = hints[38].ton_o;
    } else if ((convertFrom.value === 'ton') && (convertTo.value === 'gram')) { 
        result.value = weight.value * 1000000;
        formular.textContent = hints[39].ton_g;
    } else if ((convertFrom.value === 'ton') && (convertTo.value === 'pound')) { 
        result.value = weight.value * 2205;
        formular.textContent = hints[40].ton_p;
    } else if ((convertFrom.value === 'ton') && (convertTo.value === 'kilogram')) { 
        result.value = weight.value * 1000;
        formular.textContent = hints[41].ton_kg;
    } else if ((convertFrom.value === 'ton') && (convertTo.value === 'quintal')) { 
        result.value = weight.value * 10;
        formular.textContent = hints[42].ton_q;
    } 
}

convertFrom.addEventListener('change', convertUnits);
convertTo.addEventListener('change', convertUnits);
weight.addEventListener('input', convertUnits);