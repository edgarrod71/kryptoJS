var copiada = "";
let vocales = ['a',     'e',        'i',    'o',    'u'];
let valores = ['ai',    'enter',    'imes', 'ober', 'ufat'];
let enumED = {
    encripte: 1,
    desencripte: 0
}
let mError = "El texto tiene mayúsculas, esto no es permitido y se tratará como minúsculas ";
function krypto(selector, destino, tipo) {
    var contenido = document.querySelector(selector);
    var traducido = document.querySelector(destino);
    let strMay = contenido.value;
    //if (!/[A-Z]/.test(strMay)) alert(mError);
    alert(mError);
    if (tipo === enumED.encripte) {
        for (let i=0; i < vocales.length; i++) {
            strMay = strMay.replaceAll(vocales[i], valores[i].toUpperCase());
        }
    }
    else { 
        for (let i=0; i < vocales.length; i++) {
            strMay = strMay.replaceAll(valores[i], vocales[i].toUpperCase());
        }
    }
    traducido.textContent = strMay.toLowerCase();    
}

function copiar(selector, destino) {
    var textDestino = document.querySelector(destino);
    var textSelector = document.querySelector(selector);
    textDestino.select();
    document.execCommand("copy");
    copiada = textDestino.value;
    textSelector.value = '';
    textSelector.value = copiada;
    console.log(copiada);
    textSelector.select();
    textDestino.blur();
    textSelector.blur();
  }
