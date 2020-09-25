var caja_numero = document.getElementById('caja_numero');
var display = document.getElementById('display');
var resultado = '';

caja_numero.onkeyup = function() {

    if (caja_numero.value == '') {

        display.innerHTML = ' ';

    } else {

        calcula();
    }
}
// caja_numero.onkeydown = function() {

//     if (caja_numero.value == '') {

//     } else {

//         calcula();
//     }

// }

function calcula() {

    resultado = parseFloat(caja_numero.value) * 1.22;

    // if (resultado == NaN) {

    //     display.innerHTML = ' ';

    // } else {

    display.innerHTML = resultado;

    // }

}