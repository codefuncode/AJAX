var enviar = document.getElementById('enviar');
var nombre = document.getElementById('nombre');
var edad = document.getElementById('edad');

// enviar.addEventListener('click', showHint('Carlos', 38), false);

enviar.onclick = function() {

    showHint(nombre.value, edad.value);
};

function showHint(x, y) {

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

            var mydata = JSON.parse(this.responseText);
            // console.log(this.responseText.name);
            // console.log(this.responseText.age);
            console.log(mydata.name);
            console.log(mydata.age);

            document.getElementById('display').innerHTML = mydata.name + " estas viejo, tienes " + mydata.age + " años ;)";
            console.log(this.responseText);

        }
    };
    xmlhttp.open("GET", "php.php?nombre=" + x + "&edad=" + y, true);
    xmlhttp.setRequestHeader("Content-type", "json");
    xmlhttp.send();
}

// function myFunction(item, index) {
//     console.log(item);
//     console.log(index);
// }