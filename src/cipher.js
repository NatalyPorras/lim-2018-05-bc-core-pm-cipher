window.cipher = {
  // La funcion cifra la palabra la inresar
  encode: (offset, string) => {
    //se declaran las variables que van a contener ciertas valores
    let caracterActual = "";
    let caracterNuevo = " ";
    let encryptWord = "";
    // let desplazarN= parseInt(offset);//parsea mi dato y me devuelve un entero
    //Se re crea un bucle para recorrer toda la palabra o frase ingresada
    for (let i = 0; i < string.length; i++) {
      let codigoAsCii = string.charCodeAt(i);
      if (codigoAsCii >= 65 && codigoAsCii <= 90) {
        caracterActual = ((codigoAsCii - 65 + offset) % 26 + 65);
      } else if (codigoAsCii >= 97 && codigoAsCii <= 122) {
        caracterActual = ((codigoAsCii - 97 + offset) % 26 + 97);
      } else {
        caracterActual = codigoAsCii;
      }
      caracterNuevo = String.fromCharCode(caracterActual);
      encryptWord += caracterNuevo;
    }
    return encryptWord;
  },
  // La funcion cifra la palabra la inresar
  decode: (offset, string) => {
    //se declaran las variables que van a contener ciertas valores
    let caracterActual = "";
    let caracterNuevo = "";
    let desencryptWord = "";
    // let desplazarN= parseInt(offset);//parsea mi dato y me devuelve un entero
    //Se re crea un bucle para recorrer toda la palabra o frase ingresada
    for (let j = 0; j < string.length; j++) {
      let codigoAsCii = string.charCodeAt(j);
      if (codigoAsCii >= 65 && codigoAsCii <= 90) {
        caracterActual = ((codigoAsCii - 90 - offset) % 26 + 90);
      } else if (codigoAsCii >= 97 && codigoAsCii <= 122) {
        caracterActual = ((codigoAsCii - 122 - offset) % 26 + 122);
      } else {
        caracterAc = codigoAsc;
      }
      caracterNuevo = String.fromCharCode(caracterActual);
      desencryptWord += caracterNuevo;
    }
    return desencryptWord;
  },
  createCipherWithOffset: (offset) => {
    let cipherED = {
      encode: (string) => {
        return cipher.encode(offset, string);
      },
      decode: (string) => {
        return cipher.decode(offset, string);
      }
    };
    return cipherED;
  }
};