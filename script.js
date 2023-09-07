const meuBotao = document.querySelector(".switchButton");
const lamp = document.getElementById("lamp");
const boxone =document.querySelector(".restore")
const buttonOnOff = document.getElementById('buttonOne')
const restoreLamp = document.getElementById('restore')
let lampQuebrada = false;

function isLampBroken(){
    return lampQuebrada
}

lamp.addEventListener('dblclick',function quebrada() {   
    lamp.src = './img/quebrada.png';
    boxone.classList.remove("one");
    lampQuebrada = true;
})

function ligaDesliga (){
    if(!isLampBroken ()){
         if (meuBotao.classList.contains("ativo")) {
            meuBotao.classList.remove("ativo");
            lamp.src = './img/desligada.png'; 
        } else {
            meuBotao.classList.add("ativo");
            lamp.src = './img/ligada.png';
}}}

function restaurar(){
    lamp.src = './img/desligada.png';
    lampQuebrada = false;
    boxone.classList.add("one")
}

buttonOne.addEventListener("click", ligaDesliga);
restoreLamp.addEventListener("click", restaurar);
