window.cipher = {
  // La funcion cifra la palabra la inresar
 encode: function (offset,string){//se ingresa dos parametrosla cantidad de desplazamiento y los datos de la caja
  //se declaran las variables que van a contener ciertas valores
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
  // La funcion cifra la palabra la inresar
decode: function (offset,string){
  //se declaran las variables que van a contener ciertas valores
  let caracterAc = "";
  let caracterD = "";
  let desencryptWord= "";
  let desplazarN= parseInt(offset);//parsea mi dato y me devuelve un entero
//Se re crea un bucle para recorrer toda la palabra o frase ingresada
 for (let j = 0; j < string.length; j++) {
  let codigoAsc = string.charCodeAt(j);// se declara la variable codigoAd donde se almacenara el codigo ASCII de la primera letra de la palabra
    if (codigoAsc >= 65 && codigoAsc<=90) {//codicionamos delimitando el caracter que son MAYUSCULAS
       caracterAc = ((codigoAsc-90-desplazarN)%26 + 90); //formula para realizar el desplazamiento fijo que se da, obteniendo el nuevo caracter
    }else if(codigoAsc >= 97 && codigoAsc<=122){//codicionamos delimitando el caracter que son minusculas
           caracterAc = ((codigoAsc-122-desplazarN)%26 + 122); //formula para realizar el desplazamiento fijo que se da, obteniendo el nuevo caracter
          }else{
            caracterAc = string.charAt(j);//se obtiene el mismo valor
          }
    caracterD = String.fromCharCode(caracterAc);// registra el cambio del codigo ASCII a la palabra correcta
    desencryptWord += caracterD;//el contenedor almacena cada caracter
  }
  return desencryptWord;
},
createCipherWithOffset: function (){
let cipherED = new Object(),
  const encoded= cipher.encode(string),
  const decoded= cipher.decode(string);
return cipherED;
}

};