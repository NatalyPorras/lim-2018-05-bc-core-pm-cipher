// se declara variables para capturar los ids del html y los datos que se incluyan
let mensajeEntrada = document.getElementById("textI");
let mensajeSalida= document.getElementById("textO"); 
let numeroDesplazamiento=document.getElementById("camb");
//se declara las variables para capturar los ids de los buttons 
let buttonCifrar= document.getElementById("cipherB");
let buttonDescifrar= document.getElementById("decipherB");
let buttonclean=document.getElementById("resetT");

//se crean dos eventos button donde se pasan las funciones del cifrado y descifrado, 
buttonCifrar.addEventListener('click',()=>{
  mensajeSalida.value=cipher.encode(parseInt(numeroDesplazamiento.value),mensajeEntrada.value);
});
 
buttonDescifrar.addEventListener('click',()=>{
  mensajeSalida.value=cipher.decode(parseInt(numeroDesplazamiento.value),mensajeEntrada.value);
});

buttonclean.addEventListener('click',()=>{
  mensajeSalida.value = " ";
  mensajeEntrada.value = " ";
  numeroDesplazamiento.value = " ";
});
