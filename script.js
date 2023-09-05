const On = document.getElementById('On')
const Off = document.getElementById('Off')
const Broken = document.getElementById('Broken')
const lamp = document.getElementById('lamp')

function ligada() {
    lamp.src = './img/ligada.png';
}
function desligada() {
    lamp.src = './img/desligada.png';
}

function quebrada() {
    lamp.src = './img/quebrada.png';
}




On.addEventListener('click',ligada)
Off.addEventListener('click', desligada)
Broken.addEventListener('click', quebrada)