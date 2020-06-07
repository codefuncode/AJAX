var enviar = document.getElementById('enviar');
var dolar = document.getElementById('dolar');
var display = document.getElementById('display');

// enviar.addEventListener('click', showHint('Carlos', 38), false);

enviar.onclick = function() {
    // Llamamos al a función que enviara los datos  y le pasamos los parámetros que necesita la función 

    calcula(dolar.value);
};

function calcula(dolar) {
    //  instancia del objeto 
    var xmlhttp = new XMLHttpRequest();
    // Evento que indica que el estado a cambiado 
    xmlhttp.onreadystatechange = function() {

        //  Condicional que indica exito de la transacción 

        if (this.readyState == 4 && this.status == 200) {

            var mydata = JSON.parse(this.responseText);

            display.innerHTML = mydata.dolar + "lo que yo quera ";

            console.log(mydata.dolar);

            console.log(this.responseText);

        }
    };

    //  Estos métodos pertenecientes al objeto son los responsables de enviar los datos  
    // y declarar el formato de envió  y por ultimo enviarlos, este es el orden
    // correcto de la declaración  para su funcionamiento adecuado. 

    xmlhttp.open("GET", "php.php?dolar=" + dolar, true);
    xmlhttp.setRequestHeader("Content-type", "json");
    xmlhttp.send();
}

// function myFunction(item, index) {
//     console.log(item);
//     console.log(index);
// }