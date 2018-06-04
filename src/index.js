// se declara variables para capturar los ids del html y los datos que se incluyan
let mensajeE = document.getElementById("textI");
let mensajeS= document.getElementById("textO"); // se declara la vaariable donde se obtendra el contenido donde se ingreso el id
let numb=document.getElementById("camb");
//se declara las variables para capturar los ids de los buttons 
let btnC= document.getElementById("cipherB");
let btnD= document.getElementById("decipherB");
let btnclean=document.getElementById("resetT");

//se crean dos eventos button donde se pasan las funciones del cifrado y descifrado, 
btnC.addEventListener('click',()=>{
 
mensajeS.value=cipher.encode(parseInt(numb.value),mensajeE.value);
});
 
btnD.addEventListener('click',()=>{
  mensajeS.value=cipher.decode(parseInt(numb.value),mensajeE.value);
});
btnclean.addEventListener('click',()=>{
  mensajeS.value = " ";
  mensajeE.value = " ";
  numb.value = " ";
});
