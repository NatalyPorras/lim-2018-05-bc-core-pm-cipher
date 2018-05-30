window.cipher = {
  // ... 
};
window.cipher = {
  // La funcion cifra la palabra la inresar
 encode: function (offset,string){//se ingresa dos parametrosla cantidad de desplazamiento y los datos de la caja
  //se declaran los ocntenedores
  let caracterA = "";
  let caracter = " ";
  let encryptWord= "";
  let desplazarN= parseInt(offset);//parsea mi dato y me devuelve un entero
//Se re crea un bucle para recorrer toda la palabra o frase ingresada
 for (let i = 0; i < string.length; i++) {
  let codigoAs = string.charCodeAt(i);// se declara la variable codigoAd donde se almacenara el codigo ASCII de la primera letra de la palabra
    if (codigoAs >= 65 && codigoAs<=90) {//codicionamos delimitando el caracter que son MAYUSCULAS
       caracterA = ((codigoAs-65+desplazarN)%26 + 65); //formula para realizar el desplazamiento fijo que se da, obteniendo el nuevo caracter
    }else if(codigoAs >= 97 && codigoAs<=122){//codicionamos delimitando el caracter que son minusculas
            caracterA = ((codigoAs-97+desplazarN)%26 + 97); //formula para realizar el desplazamiento fijo que se da, obteniendo el nuevo caracter
          }else{
            caracterA = string.charAt(i);//se obtiene el mismo valor
          }
    caracter = String.fromCharCode(caracterA);// registra el cambio del codigo ASCII a la palabra correcta
    encryptWord += caracter;//el contenedor almacena cada caracter
  }
 return encryptWord;// Aqui llamo a la funcion que hara el desplazamiento
},
decode: function (offset,string){

  let caracterAc = "";
  let caracterD = "";
  let desencryptWord= "";
  let desplazarN= parseInt(offset);//parsea mi dato y me devuelve un entero
  
 for (let j = 0; j < string.length; j++) {

  let codigoAsc = string.charCodeAt(j);

    if (codigoAsc >= 65 && codigoAsc<=90) {

       caracterAc = ((codigoAsc-90-desplazarN)%26 + 90); 

     }else if(codigoAsc >= 97 && codigoAsc<=122){

     caracterAc = ((codigoAsc-122-desplazarN)%26 + 122); 
      }
    caracterD = String.fromCharCode(caracterAc);
    desencryptWord += caracterD;
  }
  return desencryptWord;
},
createCipherWithOffset: function (){
  const string= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const encodedS= cipher.encode(string);

mensajeS.value(encodedS);
  const decodedString=cipher.decode(string);
  console.log(decodedString);
}

};