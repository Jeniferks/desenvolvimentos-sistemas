document.getElementById("btnPvp").addEventListener("click", playerMode)
document.getElementById("btnPve").addEventListener("click", AiMode)

function playerMode(){
    document.getElementById('select_div').style.display = 'none';
    if(btnPvp){
        resultado1.innerHTML = `<p>Voce selecionou o modo Jogador contra Jogador</p>`
    }
    // console.log(PVP)
    // console.log(PVE)
}

function AiMode(){
     

    document.getElementById('select_div').style.display = 'none';
    if(btnPve){
        resultado1.innerHTML = `${guessedNumber()}`
    }
    // console.log(PVP)
    // console.log(PVE)
}




// function guessedNumber(){
//     let number = Math.random().toFixed(0)

// for(let i = 1; i < 10; i++){
//     let userGuess = prompt("Chute um número")

//     if(userGuess == number){
//         resultado1.innerHTML=`Voce acertou`
//     }else{
//         resultado1.innerHTML=`Voce errou`
//     }

// }
// console.log(number)
// }
