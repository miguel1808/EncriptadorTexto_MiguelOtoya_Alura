const textoInput = document.querySelector(".data-input");
const  mensajeOutput= document.querySelector(".data-output");
const imagen = document.querySelector(".muñeco");
const informacion = document.querySelector(".mensaje-info");
const copiarBtn = document.querySelector(".botonCopiar");





//Funcion para encriptar texto

function encriptar(textoEcr){
    let claves=[["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    textoEcr= textoEcr.toLowerCase();
    for(let i=0; i<claves.length; i++){
        if(textoEcr.includes(claves[i][0])){
            textoEcr=textoEcr.replaceAll(claves[i][0], claves[i][1]);
        }
    }
    return textoEcr;
}

function btnEncriptar(){
    const mensajeEncriptado = encriptar(textoInput.value);
    mensajeOutput.value = mensajeEncriptado;
    if(mensajeOutput.value.length>50){
        mensajeOutput.style="height: 500px";
        imagen.style.display="none";
    }
    
    textoOutput="";
    informacion.style.display="none";
    
    copiarBtn.style.display="flex";
    copiarBtn.focus();
}

//Funcion para< desencriptar

function desencriptar(textoDsc){
    let claves=[["enter","e"], ["imes","i"], ["ai","a"], ["ober","o"], ["ufat","u"]];
    textoDsc= textoDsc.toLowerCase();
    for(let i=0; i<claves.length; i++){
        if(textoDsc.includes(claves[i][0])){
            textoDsc=textoDsc.replaceAll(claves[i][0], claves[i][1]);
        }
    }
    return textoDsc;
}

function btnDesencriptar(){
    const mensajeDesencriptado = desencriptar(textoInput.value);
    mensajeOutput.value = mensajeDesencriptado;
    if(mensajeOutput.value.length>50){
        mensajeOutput.style="height: 500px";
        imagen.style.display="none";
        informacion.style.display="none";
    }
    textoOutput="";
    informacion.style.display="none";
    copiarBtn.style.display="flex";
    copiarBtn.focus();
}

//Funcion para copiar

function copiar(){
    mensajeOutput.select();
    navigator.clipboard.writeText(mensajeOutput.value);
    swal('','Texto copiado al portapapeles','success');
    copiarBtn.style.display="none";
    mensajeOutput.value="";
    imagen.style.display="block";
    informacion.style.display="block";
    
    mensajeOutput.setAttribute('rows','2');
    textoInput.focus();
}

