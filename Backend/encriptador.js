const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

//Matriz encriptadora
let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]

//Función para encriptar
function encriptar(stringEncriptado){
    stringEncriptado = stringEncriptado.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
    }
    return stringEncriptado;
}

//Botón para encriptar
function btnEncriptar(){
    const txtEncriptado = encriptar(textArea.value);
    mensaje.value = txtEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

//Función para desencriptar
function desencriptar(stringDesencriptado){
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for(let i = 0; i <matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptado;
}

//Botón para desencriptar
function btnDesencriptar(){
    const txtEncriptado = desencriptar(textArea.value);
    mensaje.value = txtEncriptado;
    textArea.value = "";
}

//función para copiar al portapapeles
function copiarAlPortapapeles() {
    mensaje.select();
    document.execCommand("copy");
    mensaje.setSelectionRange(0, 0);
    alert("El contenido se ha copiado al portapapeles.");
}
