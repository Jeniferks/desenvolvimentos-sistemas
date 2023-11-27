let elementoInpCopias = document.getElementById("inpCopias")

let inputCopias = 0;
let precoCopias = 0.33;

function calcular(){
    while(inputCopias < 500){

        inputCopias++

        let total = inputCopias*precoCopias;

        elementoInpCopias.innerHTML += `<div>${inputCopias} = R$${total.toFixed(2)}</div>`

        

        
    
    }
}