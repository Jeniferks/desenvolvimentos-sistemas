
// document.getElementById("btnPve").addEventListener("click", AiMode)
// document.getElementById('btn__return').style.display = 'none';


let elementoinpMin = document.getElementById("inpMin")
let elementoinpMax = document.getElementById("inpMax")
let elementoinpTentativas = document.getElementById("inpTentativas")
let elementoinpPalpite = document.getElementById("inpPalpite")
let elementoinpRestante = document.getElementById("inpRestante")
let elementoinpPontos = document.getElementById("inpPontos")
let elementoinpDicas = document.getElementById("inpDicas")

function AiMode(){
    
    document.getElementById('select_div').style.display = 'none';
    
    if(btnPve){
        document.getElementById("gamePageAi").style.display = "flex"
       
    }
    
}

function AiGameMode(){

    let userNumber = document.getElementById("inpPve").value
    let number = Number(Math.random()*10).toFixed()
    let result = document.getElementById("resultadoFinal1")

    if(userNumber == number){
        result.innerHTML=`<p>Voce acertou</p>`
        // document.getElementById('btn__return').style.display = 'flex';
    }else{
        result.innerHTML=`<p>Voce errou</p>`
    }
    console.log(number)
}




