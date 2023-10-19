document.getElementById("btnPvp").addEventListener("click", playerMode)
document.getElementById("btnPve").addEventListener("click", AiMode)
document.getElementById('btn__return').style.display = 'none';

function AiMode(){
    
    document.getElementById('select_div').style.display = 'none';
    
    // document.getElementById('select_div').style.display = 'none';
    // document.getElementById( "divH1").style.display = 'none';
    if(btnPve){
        document.getElementById("gamePageAi").style.display = "flex"
        // resultado1.innerHTML = `<p>Você selecionou o modo jogador contra jogador</p>`
    }
    
}


function playerMode(){
    document.getElementById('select_div').style.display = 'none';
    
    // document.getElementById( "divH1").style.display = 'none';


    if(btnPvp){
        

        document.getElementById("gamePagePlayer").style.display = "flex";

        // resultado1.innerHTML = `<p>Voce selecionou o modo Jogador contra Jogador</p>`
    }
    
}


function AiGameMode(){

    let userNumber = document.getElementById("inpPve").value
    let number = Number(Math.random()*10).toFixed()
    let result = document.getElementById("resultadoFinal1")

    if(userNumber == number){
        result.innerHTML=`<p>Voce acertou</p>`
        document.getElementById('btn__return').style.display = 'flex';
    }else{
        result.innerHTML=`<p>Voce errou</p>`
    }
    console.log(number)
}

function PlayerGameMode(){

    let userNumber = document.getElementById("inpPvp").value
    let number = Number(Math.random()*10).toFixed()
    let result = document.getElementById("resultadoFinal2")

    if(userNumber == number){
        result.innerHTML=`<p>Voce acertou</p>`
    }else{
        result.innerHTML=`<p>Voce errou</p>`
    }
    console.log(number)

}


