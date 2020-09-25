function reqListener() {
    console.log(this.responseText);
}

var oReq = new XMLHttpRequest();

oReq.addEventListener("load", reqListener);
oReq.open("GET", "example.txt");
oReq.send();