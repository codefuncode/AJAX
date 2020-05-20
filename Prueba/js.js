var enviar = document.getElementById('enviar');
var nombre = document.getElementById('nombre');
var edad = document.getElementById('edad');

// enviar.addEventListener('click', showHint('Carlos', 38), false);

enviar.onclick = function() {
    // Llamamos al a función que enviara los datos  y le pasamos los parámetros que necesita la función 

    showHint(nombre.value, edad.value);
};

function showHint(x, y) {
    //  instancia del objeto 
    var xmlhttp = new XMLHttpRequest();
    // Evento que indica que el estado a cambiado 
    xmlhttp.onreadystatechange = function() {

        //  Condicional que indica exito de la transacción 

        if (this.readyState == 4 && this.status == 200) {

            // Para trabajar Con Json debemos  convertir el método responseTesxt a objeto Json 
            var mydata = JSON.parse(this.responseText);

            //  Los datos que vienen del servidor alojados en la variable se 
            //  escribirnos el nombre de la variable seguido de un punto  y en nombre del valor 
            // típico de matrices asociativas 

            // console.log(this.responseText.name);
            // console.log(this.responseText.age);

            console.log(mydata.name);
            console.log(mydata.age);

            document.getElementById('display').innerHTML = mydata.name + " estas viejo, tienes " + mydata.age + " años ;)";
            console.log(this.responseText);

        }
    };

    //  Estos métodos pertenecientes al objeto son los responsables de enviar los datos  
    // y declarar el formato de envió  y por ultimo enviarlos, este es el orden
    // correcto de la declaración  para su funcionamiento adecuado. 

    xmlhttp.open("GET", "php.php?nombre=" + x + "&edad=" + y, true);
    xmlhttp.setRequestHeader("Content-type", "json");
    xmlhttp.send();
}

// function myFunction(item, index) {
//     console.log(item);
//     console.log(index);
// }