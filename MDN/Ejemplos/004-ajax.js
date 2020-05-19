var oReq = new XMLHttpRequest();

//  Evento loadend indica si la transacción  
// termino  independientemente de si fue exitoso o no 
oReq.addEventListener("loadend", loadEnd);

oReq.open("GET", "ajax_info.txt", true);

oReq.send();

function loadEnd(e) {

    console.log("La transferencia finalizó (aunque no sabemos si tuvo éxito o no).");
}