var xhr = new XMLHttpRequest();

xhr.onload = function() {

    console.log(this.responseXML.title);
}

xhr.open("GET", "file.html");
xhr.responseType = "document";
xhr.send();