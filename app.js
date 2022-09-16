// https://www.omnicalculator.com/conversion/cups-to-gallons-converter

const v =  document.getElementById('v');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const gallonsRadio = document.getElementById('gallonsRadio');
const cupsRadio = document.getElementById('cupsRadio');

let gallons;
let cups = v; 

// labels of the inpust
const variable = document.getElementById('variable');

gallonsRadio.addEventListener('click', function() {
  variable.textContent = 'Cups';
  cups = v;
  result.textContent = '';
});

cupsRadio.addEventListener('click', function() {
  variable.textContent = 'Gallons';
  gallons = v;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(gallonsRadio.checked)
    result.textContent = `Gallons = ${computegallons().toFixed(5)}`;

  else if(cupsRadio.checked)
    result.textContent = `Cups = ${computecups().toFixed(5)}`;
})

// calculation

function computegallons() {
  return Number(cups.value) / 16;
}

function computecups() {
  return Number(gallons.value) * 16;
}