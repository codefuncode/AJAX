jQuery(document).ready(function($) {

    var xhttp = new XMLHttpRequest();
    console.log(xhttp);

    console.log(xhttp.status);
    console.log(xhttp.responseURL);
    // var boton = document.getElementById('boton');
    // boton.onclick = function() {

    //     var xhttp = new XMLHttpRequest();

    //     xhttp.onreadystatechange = function() {

    //         if (this.readyState == 4 && this.status == 200) {

    //             document.getElementById("demo").innerHTML = this.responseText;

    //         } else {
    //             // alert('message?: DOMString');
    //         }
    //     };

    //     xhttp.open("GET", "../txt/ajax_infot.txt", true);
    //     xhttp.send();
    // };

});