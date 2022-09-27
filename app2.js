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


const crearNombreDeDominio = PRONOUN.map(function(palabra){
  
  return final =  ADJ.map(function(segundaPalabra){
   
      return final =  NOUN.map(function(tercerPalabra){
       
         return palabra + segundaPalabra + tercerPalabra + EXTENSION;
         
      })
  })
  
})

console.log(crearNombreDeDominio);