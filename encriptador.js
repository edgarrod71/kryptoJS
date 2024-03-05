let frase = "";
let copiada = "";
let cambios = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};

function encriptar(selector) {
    var contenido = document.querySelector(selector);
    let frase = contenido.textContent;

    return frase;
}

function desencriptar() {
    return frase;
}

function copiar(selector, destino) {
    var textArea = document.querySelector(destino);
    textArea.select();
    document.execCommand("copy");
    textArea.blur();
    copiada = textArea.textContent;
    // copiada = textArea.textContent;
    // var textDestino = document.querySelector(destino);
    // textDestino.innerHTML = textArea.textContent;
}