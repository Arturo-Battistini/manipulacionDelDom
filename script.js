const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#Calculo1');
const input2 = document.querySelector('#Calculo2');
const btn = document.querySelector('#btnCalcular');
const p = document.querySelector('#result');
const pruebajs = document.querySelector('btnPrueba')

btn.addEventListener('click', sumarInputsVarios)

function sumarInputsVarios() {
    const sumaInputs = (parseInt(input1.value) + parseInt(input2.value));
    p.innerText = "Resultado: " + sumaInputs

}

/* function btnPruebajs() {
    const cambio = ('si presionamos cambia')
    const cambioHecho = cambio.innerText = cambio
    console.log(cambioHecho);

} */