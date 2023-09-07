const OnOff = document.getElementById('OnOff')
const RestoreBroken = document.getElementById('RestoreBroken')
const lamp = document.getElementById('lamp')

let stop = false; 

function isLampBroken(){
    return lamp.src.indexOf ( 'quebrada' ) > -1
}

function ligada() {
    if (!isLampBroken()){
        lamp.src = './img/ligada.png';
        
    }
    
}
function restore() {
    lamp.src = './img/desligada.png';
}

function quebrada() {
    lamp.src = './img/quebrada.png';
}

function ligarDesligar(){
    if(stop){
        return
    }
    if(OnOff.textContent == 'Ligar'){
        ligada();   
        OnOff.textContent = 'Desligar'
    }else{
        restore();
        OnOff.textContent = 'Ligar'
    }
}

function RestaurarQuebrar(){
    if (RestoreBroken.textContent == 'Quebrar') {
        quebrada();  // Chama a função quebrada() quando o texto é 'Quebrar'
        RestoreBroken.textContent = 'Restaurar';
        stop = true;
    } else {
        restore();  // Chama a função restore() quando o texto não é 'Quebrar'
        RestoreBroken.textContent = 'Quebrar';
        stop = false;
    }
}


 
OnOff.addEventListener('click', ligarDesligar)
RestoreBroken.addEventListener('click', RestaurarQuebrar)

