const PRONOUN = ['the','our'];
const ADJ = ['great', 'big' ];
const NOUN = ['jogger','racoon'];
const EXTENSION = ".com";
/*
  thegreatjogger.com 
  thegreatracoon.com
  thebigjogger.com 
  thebigracoon.com 
  ourgreatjogger.com 
  ourgreatracoon.com  
  ourbigjogger.com 
  ourbigracoon.com 
*/


function crearNombreDeDominio(arr1,arr2,arr3){
    let nombresDominio = new Array();
    arr1.forEach(palabra => {  
      arr2.forEach(segundaPalabra => {   
          arr3.forEach(tercerPalabra => {
              // inserta los datos en el array "nombresDominio"
              nombresDominio.push (palabra + segundaPalabra + tercerPalabra + EXTENSION);               
          })
      })      
    })
    return nombresDominio;
}

function agregarElementosID(arr4){ 
    var elementos ='<ul class="list-group list-group-flush bg-warning">';
    arr4.forEach(function(data){
      elementos = elementos + '<li class="list-group-item">' + data + '</li>';    
    })
    return elementos + "</ul>";
}
// salida al ID
let salidaID= agregarElementosID(crearNombreDeDominio(PRONOUN, ADJ, NOUN));
console.log(salidaID);
document.getElementById("elementos").innerHTML = salidaID;