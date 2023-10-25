
// document.getElementById("btnPve").addEventListener("click", AiMode)
// document.getElementById('btn__return').style.display = 'none';


let elementoinpMin = document.getElementById("inpMin")
let elementoinpMax = document.getElementById("inpMax")
let elementoinpTentativas = document.getElementById("inpTentativas")
let elementoinpPalpite = document.getElementById("inpPalpite")
let elementoinpRestante = document.getElementById("inpRestante")
let elementoinpPontos = document.getElementById("inpPontos")
let elementoinpDicas = document.getElementById("inpDicas")
let numeroSecreto 
let maximoTentativas 
let elementoInpMsg =  document.getElementById("msgJogador")
let startButton = document.getElementById("guess__btn")
let quitBtn = document.getElementById("quit__btn")

//Pagina inicial
function AiMode(){
    
    document.getElementById('select_div').style.display = 'none';
    
    if(btnPve){
        document.getElementById("gamePageAi").style.display = "flex"
       
    }
    
    
}

//Preparo de jogo

function AiGameMode(){
    maximoTentativas =  Number(elementoinpMax.value)
    numeroSecreto = (Math.floor(Math.random() * Number(elementoinpMax.value) - Number(elementoinpMin.value) +1) + Number(elementoinpMin.value))
    elementoinpRestante.value = elementoinpTentativas.value
    console.log(numeroSecreto)
    elementoinpMin.value = "";
    elementoinpMax.value = "";
    elementoinpTentativas.value = "";
    startButton.disabled = true
    quitBtn.disabled = false
    

    
}

//Começar palpites
function userGuess(){
    if((elementoinpRestante.value) > 0){
        if( elementoinpPalpite.value == numeroSecreto  ){
            elementoinpRestante.value
            elementoinpDicas.value = elementoinpDicas.innerHTML = 'Você acertou'
            elementoinpPontos.value = Number(elementoinpPontos.value) + 10
            elementoInpMsg.value = elementoInpMsg.innerHTML = '<h2>Arrasou!Você Ganhou o jogo</h1>'
            swal({
                title: "Parabéns!",
                text: "Você ganhou o jogo!",
                icon: "success",
                button: "UHUUUL!",
              });
    
            
        }else if(elementoinpPalpite.value > numeroSecreto){
            elementoinpPalpite.value = ""
            elementoinpRestante.value = elementoinpRestante.value - 1
            elementoinpPontos.value = elementoinpPontos.value - 10
            elementoinpDicas.value = elementoinpDicas.innerHTML = 'Seu chute foi maior'
            elementoInpMsg.value = elementoInpMsg.innerHTML = '<h2>Errou feio, errou rude</h2>'
    
            
        }else{
            elementoinpPalpite.value = ""
            elementoinpRestante.value = elementoinpRestante.value - 1
            elementoinpPontos.value = elementoinpPontos.value - 10
            elementoinpDicas.value = elementoinpDicas.innerHTML = 'Seu chute foi menor'
            elementoInpMsg.value = elementoInpMsg.innerHTML = '<h2>Errou feio, errou rude</h2>'
    
        }
    }else{
        elementoInpMsg.value = elementoInpMsg.innerHTML = "<h2>Já era, perdeu playboy</h2>"
        startButton.disabled = false
        startButton.disabled = false
        quitBtn.disabled = false
        swal({
            title: "Que pena!",
            text: "Você perdeu o jogo!",
            icon: "success",
            button: "AAAARRGH!",
          });
    }

}

function quitGame(){
    
    elementoinpMin.value = ""
    elementoinpMax.value = ""
    elementoinpTentativas.value = ""
    elementoinpPalpite.value = ""
    elementoinpRestante.value = ""
    elementoinpPontos.value = ""
    elementoinpDicas.value = elementoinpDicas.innerHTML = ""
    elementoInpMsg.value = elementoInpMsg.innerHTML = 'Recomece o jogo'
    

    if(elementoinpRestante.value <= 0){
        startButton.disabled = false
        quitBtn.disabled = true
    }else{
        startButton.disabled = true
        quitBtn.disabled = false
    }
}

//SHOW MODAL
