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

const length = document.querySelector('#amount');
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
        // 1 nm to mm
        nm_mm: 'Multiply the length by 0.000001'
    },
    {
        // 2 nm to cm
        nm_cm: 'Multiply the length by 0.0000001'
    },
    {
        // 3 nm to inch
        nm_inch: 'Multiply the length by 0.00000003937'
    },
    {
        // 4 nm to foot
        nm_f: 'Multiply the length by 0.0000000032808'
    },
    {
        // 5 nm to yard
        nm_y: 'Multiply the length by 0.0000000010936'
    },
    {
        // 6 nm to m
        nm_m: 'Multiply the length by 0.000000001'
    },
    {
        // 7 nm to km
        nm_km: 'Multiply the length by 0.000000000001'
    },
    {
        // 8 nm to mile
        nm_mile: 'Multiply the length by 0.00000000000062137'
    },
    {
        // 9 mm to nm
        mm_nm: 'Multiply the length by 1,000,000'
    },
    {
        // 10 mm to cm
        mm_cm: 'Multiply the length by 0.1'
    },
    {
        // 11 mm to inch
        mm_inch: 'Multiply the length by 0.03937'
    },
    {
        // 12 mm to foot
        mm_f: 'Multiply the length by 0.003281'
    },
    {
        // 13 mm to yard
        mm_y: 'Multiply the length by 0.001094'
    },
    {
        // 14 mm to m
        mm_m: 'Multiply the length by 0.001'
    },
    {
        // 15 mm to km
        mm_km: 'Multiply the length by 0.000001'
    },
    {
        // 16 mm to mile
        mm_mile: 'Multiply the length by 0.00000062137'
    },
    {
        // 17 cm to nm
        cm_nm: 'Multiply the length by 10,000,000'
    },
    {
        // 18 cm to mm
        cm_mm: 'Multiply the length by 10'
    },
    {
        // 19 cm to inch
        cm_inch: 'Multiply the length by 0.393701'
    },
    {
        // 20 cm to foot
        cm_f: 'Multiply the length by 0.032808'
    },
    {
        // 21 cm to yard
        cm_y: 'Multiply the length by 0.010936'
    },
    {
        // 22 cm to m
        cm_m: 'Multiply the length by 0.01'
    },
    {
        // 23 cm to km
        cm_km: 'Multiply the length by 0.00001'
    },
    {
        // 24 cm to mile
        cm_mile: 'Multiply the length by 0.0000062137'
    },
    {
        // 25 inch to nm
        inch_nm: 'Multiply the length by 25,400,000'
    },
    {
        // 26 inch to mm
        inch_mm: 'Multiply the length by 25.4'
    },
    {
        // 27 inch to cm
        inch_cm: 'Multiply the length by 2.54'
    },
    {
        // 28 inch to foot
        inch_f: 'Multiply the length by 0.083333'
    },
    {
        // 29 inch to yard
        inch_y: 'Multiply the length by 0.027778'
    },
    {
        // 30 inch to m
        inch_m: 'Multiply the length by 0.0254'
    },
    {
        // 31 inch to km
        inch_km: 'Multiply the length by 0.0000254'
    },
    {
        // 32 inch to mile
        inch_mile: 'Multiply the length by 0.000015783'
    },
    {
        // 33 foot to nm
        f_nm: 'Multiply the length by 304,800,000'
    },
    {
        // 34 foot to mm
        f_mm: 'Multiply the length by 304.8'
    },
    {
        // 35 foot to cm
        f_cm: 'Multiply the length by 30.48'
    },
    {
        // 36 foot to inch
        f_inch: 'Multiply the length by 12'
    },
    {
        // 37 foot to yard
        f_y: 'Multiply the length by 0.333333'
    },
    {
        // 38 foot to m
        f_m: 'Multiply the length by 0.3048'
    },
    {
        // 39 foot to km
        f_km: 'Multiply the length by 0.000305'
    },
    {
        // 40 foot to mile
        f_mile: 'Multiply the length by 0.000189'
    },
    {
        // 41 yard to nm
        y_nm: 'Multiply the length by 914,400,000'
    },
    {
        // 42 yard to mm
        y_mn: 'Multiply the length by 914.4'
    },
    {
        // 43 yard to cm
        y_cm: 'Multiply the length by 91.44'
    },
    {
        // 44 yard to inch
        y_inch: 'Multiply the length by 36'
    },
    {
        // 45 yard to foot
        y_f: 'Multiply the length by 3'
    },
    {
        // 46 yard to m
        y_m: 'Multiply the length by 0.9144'
    },
    {
        // 47 yard to km
        y_km: 'Multiply the length by 0.000914'
    },
    {
        // 48 yard to mile
        y_mile: 'Multiply the length by 0.000568'
    },
    {
        // 49 m to nm
        m_nm: 'Multiply the length by 1,000,000,000'
    },
    {
        // 50 m to mm
        m_mm: 'Multiply the length by 1,000'
    },
    {
        // 51 m to cm
        m_cm: 'Multiply the length by 100'
    },
    {
        // 52 m to inch
        m_inch: 'Multiply the length by 39.370079'
    },
    {
        // 53 m to foot
        m_f: 'Multiply the length by 3.28084'
    },
    {
        // 54 m to yard
        m_y: 'Multiply the length by 1.093613'
    },
    {
        // 55 m to km
        m_km: 'Multiply the length by 0.0001'
    },
    {
        // 56 m to mile
        m_mile: 'Multiply the length by 0.000621'
    },
    {
        // 57 km to nm
        km_nm: 'Multiply the length by 1,000,000,000,000'
    },
    {
        // 58 km to mm
        km_mm: 'Multiply the length by 1,000,000'
    },
    {
        // 59 km to cm 
        km_cm: 'multiply the length by 100,000'
    },
    {
        // 60 km to inch
        km_inch: 'Multiply the length by 39,370'
    },
    {
        // 61 km to foot
        km_f: 'multiply the length by 3,281'
    },
    {
        // 62 km to yard
        km_y: 'Multiply the length by 1,094'
    },
    {
        // 63 km to m
        km_m: 'Multiply the length by 1000'
    },
    {
        // 64 km to mile
        km_mile: 'Multiply the length by 0.621371'
    },
    {
        // 65 mile to nm
        mile_nm: 'Multiply the length by 1,609,344,000,000'
    },
    {
        // 66 mile to mm
        mile_mm: 'Multiply the length by 1,609,344'
    },
    {
        // 67 mile to cm
        mile_cm: 'Multiply the length by 160,934,400'
    },
    {
        // 68 mile to inch
        mile_inch: 'Multiply the length by 63,360'
    },
    {
        // 69 mile to foot
        mile_f: 'Multiply the length by 5,280'
    },
    {
        // 70 mile to yard
        mile_y: 'Multiply the length by 1,760'
    },
    {
        // 71 mile to m
        mile_m: 'Multiply the length by 1,609'
    },
    {
        // 72 mile to km
        mile_km: 'Multiply the length by 1.609344'
    },
];


const units = [
    'milimeter',
    'centimeter',
    'inch',
    'foot',
    'yard',
    'meter',
    'kilometer',
    'mile'
];


for (let i = 7; i >= 0; i--) {
    let option = `<option value=${units[i]}>${units[i]}</option>`;
    selectElem[0].firstElementChild.insertAdjacentHTML('afterend', option);
}
for (let i = 7; i >= 0; i--) {
    let option = `<option value=${units[i]}>${units[i]}</option>`;
    selectElem[1].firstElementChild.insertAdjacentHTML('afterend', option);
}


function convertUnits() {
    if (
        (convertFrom.value === 'nanometer') && (convertTo.value === 'nanometer') ||
        (convertFrom.value === 'milimeter') && (convertTo.value === 'milimeter') ||
        (convertFrom.value === 'centimeter') && (convertTo.value === 'centimeter') ||
        (convertFrom.value === 'inch') && (convertTo.value === 'inch') ||
        (convertFrom.value === 'foot') && (convertTo.value === 'foot') ||
        (convertFrom.value === 'yard') && (convertTo.value === 'yard') ||
        (convertFrom.value === 'meter') && (convertTo.value === 'meter') ||
        (convertFrom.value === 'kilometer') && (convertTo.value === 'kilometer') ||
        (convertFrom.value === 'mile') && (convertTo.value === 'mile') ||
        (convertFrom.value === 'nautical mile') && (convertTo.value === 'nautical mile') 
    ) {
        result.value = length.value;
        formular.textContent = hints[0].sameUnit;
    } else if ((convertFrom.value === 'nanometer') && (convertTo.value === 'milimeter')) { 
        result.value = length.value * 0.000001;
        formular.textContent = hints[1].nm_mm;
    } else if ((convertFrom.value === 'nanometer') && (convertTo.value === 'centimeter')) { 
        result.value = length.value * 0.0000001;
        formular.textContent = hints[2].nm_cm;
    } else if ((convertFrom.value === 'nanometer') && (convertTo.value === 'inch')) { 
        result.value = length.value * 0.00000003937;
        formular.textContent = hints[3].nm_inch;
    }  else if ((convertFrom.value === 'nanometer') && (convertTo.value === 'foot')) { 
        result.value = length.value * 0.0000000032808;
        formular.textContent = hints[4].nm_f;
    } else if ((convertFrom.value === 'nanometer') && (convertTo.value === 'yard')) { 
        result.value = length.value * 0.0000000010936;
        formular.textContent = hints[5].nm_yd;
    } else if ((convertFrom.value === 'nanometer') && (convertTo.value === 'meter')) { 
        result.value = length.value * 0.000000001;
        formular.textContent = hints[6].nm_m;
    } else if ((convertFrom.value === 'nanometer') && (convertTo.value === 'kilometer')) { 
        result.value = length.value * 0.000000000001;
        formular.textContent = hints[7].nm_km;
    } else if ((convertFrom.value === 'nanometer') && (convertTo.value === 'mile')) {
        result.value = length.value * 0.00000000000062137;
        formular.textContent = hints[8].nm_mile;
    } else if ((convertFrom.value === 'milimeter') && (convertTo.value === 'nanometer')) {
        result.value = length.value * 1000000;
        formular.textContent = hints[9].mm_nm;
    } else if ((convertFrom.value === 'milimeter') && (convertTo.value === 'centimeter')) {
        result.value = length.value * 0.1;
        formular.textContent = hints[10].mm_cm;
    } else if ((convertFrom.value === 'milimeter') && (convertTo.value === 'inch')) {
        result.value = length.value * 0.03937;
        formular.textContent = hints[11].mm_inch;
    } else if ((convertFrom.value === 'milimeter') && (convertTo.value === 'foot')) {
        result.value = length.value * 0.003281;
        formular.textContent = hints[12].mm_f;
    } else if ((convertFrom.value === 'milimeter') && (convertTo.value === 'yard')) {
        result.value = length.value * 0.001094;
        formular.textContent = hints[13].mm_y;
    } else if ((convertFrom.value === 'milimeter') && (convertTo.value === 'meter')) {
        result.value = length.value * 0.001;
        formular.textContent = hints[14].mm_m;
    } else if ((convertFrom.value === 'milimeter') && (convertTo.value === 'kilometer')) {
        result.value = length.value * 0.000001;
        formular.textContent = hints[15].mm_km;
    } else if ((convertFrom.value === 'milimeter') && (convertTo.value === 'mile')) {
        result.value = length.value * 0.00000062137;
        formular.textContent = hints[16].mm_mile;
    } else if ((convertFrom.value === 'centimeter') && (convertTo.value === 'nanometer')) {
        result.value = length.value * 10000000;
        formular.textContent = hints[17].cm_nm;
    } else if ((convertFrom.value === 'centimeter') && (convertTo.value === 'milimeter')) {
        result.value = length.value * 10;
        formular.textContent = hints[18].cm_mm;
    } else if ((convertFrom.value === 'centimeter') && (convertTo.value === 'inch')) {
        result.value = length.value * 0.393701;
        formular.textContent = hints[19].cm_inch;
    } else if ((convertFrom.value === 'centimeter') && (convertTo.value === 'foot')) {
        result.value = length.value * 0.032808;
        formular.textContent = hints[20].cm_f;
    } else if ((convertFrom.value === 'centimeter') && (convertTo.value === 'yard')) {
        result.value = length.value * 0.010936;
        formular.textContent = hints[21].cm_y;
    } else if ((convertFrom.value === 'centimeter') && (convertTo.value === 'meter')) {
        result.value = length.value * 0.01;
        formular.textContent = hints[22].cm_m;
    } else if ((convertFrom.value === 'centimeter') && (convertTo.value === 'kilometer')) {
        result.value = length.value * 0.00001;
        formular.textContent = hints[23].cm_km;
    } else if ((convertFrom.value === 'centimeter') && (convertTo.value === 'mile')) {
        result.value = length.value * 0.0000062137;
        formular.textContent = hints[24].cm_mile;
    } else if ((convertFrom.value === 'inch') && (convertTo.value === 'nanometer')) {
        result.value = length.value * 254000000;
        formular.textContent = hints[25].inch_nm;
    } else if ((convertFrom.value === 'inch') && (convertTo.value === 'milimeter')) {
        result.value = length.value * 25.4;
        formular.textContent = hints[26].inch_mm;
    } else if ((convertFrom.value === 'inch') && (convertTo.value === 'centimeter')) {
        result.value = length.value * 2.54;
        formular.textContent = hints[27].inch_cm;
    } else if ((convertFrom.value === 'inch') && (convertTo.value === 'foot')) {
        result.value = length.value * 0.083333;
        formular.textContent = hints[28].inch_f;
    } else if ((convertFrom.value === 'inch') && (convertTo.value === 'yard')) {
        result.value = length.value * 0.027778;
        formular.textContent = hints[29].inch_y;
    } else if ((convertFrom.value === 'inch') && (convertTo.value === 'meter')) {
        result.value = length.value * 0.0254;
        formular.textContent = hints[30].inch_m;
    } else if ((convertFrom.value === 'inch') && (convertTo.value === 'kilometer')) {
        result.value = length.value * 0.0000254;
        formular.textContent = hints[31].inch_km;
    } else if ((convertFrom.value === 'inch') && (convertTo.value === 'mile')) {
        result.value = length.value * 0.000015783;
        formular.textContent = hints[32].inch_mile;
    } else if ((convertFrom.value === 'foot') && (convertTo.value === 'nanometer')) {
        result.value = length.value * 304800000000;
        formular.textContent = hints[33].f_nm;
    } else if ((convertFrom.value === 'foot') && (convertTo.value === 'milimeter')) {
        result.value = length.value * 304.8;
        formular.textContent = hints[34].f_mm;
    } else if ((convertFrom.value === 'foot') && (convertTo.value === 'centimeter')) {
        result.value = length.value * 30.48;
        formular.textContent = hints[35].f_cm;
    } else if ((convertFrom.value === 'foot') && (convertTo.value === 'inch')) {
        result.value = length.value * 12;
        formular.textContent = hints[36].f_inch;
    } else if ((convertFrom.value === 'foot') && (convertTo.value === 'yard')) {
        result.value = length.value * 0.333333;
        formular.textContent = hints[37].f_y;
    } else if ((convertFrom.value === 'foot') && (convertTo.value === 'meter')) {
        result.value = length.value * 0.3048;
        formular.textContent = hints[38].f_m;
    } else if ((convertFrom.value === 'foot') && (convertTo.value === 'kilometer')) {
        result.value = length.value * 0.0003048;
        formular.textContent = hints[39].f_km;
    } else if ((convertFrom.value === 'foot') && (convertTo.value === 'mile')) {
        result.value = length.value * 0.000189;
        formular.textContent = hints[40].f_mile;
    } else if ((convertFrom.value === 'yard') && (convertTo.value === 'nanometer')) {
        result.value = length.value * 914400000;
        formular.textContent = hints[41].y_nm;
    } else if ((convertFrom.value === 'yard') && (convertTo.value === 'milimeter')) {
        result.value = length.value * 914.4;
        formular.textContent = hints[42].y_mm;
    } else if ((convertFrom.value === 'yard') && (convertTo.value === 'centimeter')) {
        result.value = length.value * 91.44;
        formular.textContent = hints[43].y_cm;
    } else if ((convertFrom.value === 'yard') && (convertTo.value === 'inch')) {
        result.value = length.value * 36;
        formular.textContent = hints[44].y_inch;
    } else if ((convertFrom.value === 'yard') && (convertTo.value === 'foot')) {
        result.value = length.value * 3;
        formular.textContent = hints[45].y_f;
    } else if ((convertFrom.value === 'yard') && (convertTo.value === 'meter')) {
        result.value = length.value * 0.9144;
        formular.textContent = hints[46].y_m;
    } else if ((convertFrom.value === 'yard') && (convertTo.value === 'kilometer')) {
        result.value = length.value * 0.000914;
        formular.textContent = hints[47].y_km;
    } else if ((convertFrom.value === 'yard') && (convertTo.value === 'mile')) {
        result.value = length.value * 0.000568;
        formular.textContent = hints[48].y_mile;
    } else if ((convertFrom.value === 'meter') && (convertTo.value === 'nanometer')) {
        result.value = length.value * 1000000000;
        formular.textContent = hints[49].m_nm;
    } else if ((convertFrom.value === 'meter') && (convertTo.value === 'milimeter')) {
        result.value = length.value * 1000;
        formular.textContent = hints[50].m_mm;
    } else if ((convertFrom.value === 'meter') && (convertTo.value === 'centimeter')) {
        result.value = length.value * 100;
        formular.textContent = hints[51].m_cm;
    } else if ((convertFrom.value === 'meter') && (convertTo.value === 'inch')) {
        result.value = length.value * 39.370079;
        formular.textContent = hints[52].m_inch;
    } else if ((convertFrom.value === 'meter') && (convertTo.value === 'foot')) {
        result.value = length.value * 3.28084;
        formular.textContent = hints[53].m_f;
    } else if ((convertFrom.value === 'meter') && (convertTo.value === 'yard')) {
        result.value = length.value * 1.093613;
        formular.textContent = hints[54].m_y;
    } else if ((convertFrom.value === 'meter') && (convertTo.value === 'kilometer')) {
        result.value = length.value * 0.0001;
        formular.textContent = hints[55].m_km;
    } else if ((convertFrom.value === 'meter') && (convertTo.value === 'mile')) {
        result.value = length.value * 0.000621;
        formular.textContent = hints[56].m_mile;
    } else if ((convertFrom.value === 'kilometer') && (convertTo.value === 'nanometer')) {
        result.value = length.value * 1000000000000;
        formular.textContent = hints[57].km_nm;
    } else if ((convertFrom.value === 'kilometer') && (convertTo.value === 'milimeter')) {
        result.value = length.value * 1000000;
        formular.textContent = hints[58].km_mm;
    } else if ((convertFrom.value === 'kilometer') && (convertTo.value === 'centimeter')) {
        result.value = length.value * 100000;
        formular.textContent = hints[59].km_cm;
    } else if ((convertFrom.value === 'kilometer') && (convertTo.value === 'inch')) {
        result.value = length.value * 39370;
        formular.textContent = hints[60].km_inch;
    } else if ((convertFrom.value === 'kilometer') && (convertTo.value === 'foot')) {
        result.value = length.value * 3281;
        formular.textContent = hints[61].km_f;
    } else if ((convertFrom.value === 'kilometer') && (convertTo.value === 'yard')) {
        result.value = length.value * 1094;
        formular.textContent = hints[62].km_y;
    } else if ((convertFrom.value === 'kilometer') && (convertTo.value === 'meter')) {
        result.value = length.value * 1000;
        formular.textContent = hints[63].km_m;
    } else if ((convertFrom.value === 'kilometer') && (convertTo.value === 'mile')) {
        result.value = length.value * 0.621371;
        formular.textContent = hints[64].km_mile;
    } else if ((convertFrom.value === 'mile') && (convertTo.value === 'nanometer')) {
        result.value = length.value * 1609344000000;
        formular.textContent = hints[65].mile_nm;
    } else if ((convertFrom.value === 'mile') && (convertTo.value === 'milimeter')) {
        result.value = length.value * 1609344;
        formular.textContent = hints[66].mile_mm;
    } else if ((convertFrom.value === 'mile') && (convertTo.value === 'centimeter')) {
        result.value = length.value * 160934400;
        formular.textContent = hints[67].mile_cm;
    } else if ((convertFrom.value === 'mile') && (convertTo.value === 'inch')) {
        result.value = length.value * 63360;
        formular.textContent = hints[68].mile_inch;
    } else if ((convertFrom.value === 'mile') && (convertTo.value === 'foot')) {
        result.value = length.value * 5280;
        formular.textContent = hints[69].mile_f;
    } else if ((convertFrom.value === 'mile') && (convertTo.value === 'yard')) {
        result.value = length.value * 1760;
        formular.textContent = hints[70].mile_y;
    } else if ((convertFrom.value === 'mile') && (convertTo.value === 'meter')) {
        result.value = length.value * 1609;
        formular.textContent = hints[71].mile_m;
    } else if ((convertFrom.value === 'mile') && (convertTo.value === 'kilometer')) {
        result.value = length.value * 1609344;
        formular.textContent = hints[72].mile_km;
    }
}

convertFrom.addEventListener('change', convertUnits);
convertTo.addEventListener('change', convertUnits);
length.addEventListener('input', convertUnits);