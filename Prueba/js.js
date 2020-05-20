var enviar = document.getElementById('enviar');

enviar.addEventListener('click', loadDoc, false);

function loadDoc() {

    var nombre = document.getElementById('nombre');
    var edad = document.getElementById('edad');
    var data = {
        nombre: nombre.value,
        edad: edad.value
    }

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

            console.log(this.response);
        }
    };
    xhttp.open("POST", "php.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(data);

    return false
}