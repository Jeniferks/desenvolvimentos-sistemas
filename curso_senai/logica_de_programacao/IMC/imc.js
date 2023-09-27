// IMC = Peso ÷ (Altura × Altura)


function calculoIMC() {
    let peso = document.getElementById("inpPeso").value
    let altura = document.getElementById("inpAltura").value
    let resultadoIMC = document.getElementById("result__imc")
    let resultado = document.getElementById("result")


    let valorIMC = peso / (altura * altura)


    resultadoIMC.innerHTML = `<h3>Seu IMC é ${valorIMC.toFixed(2)}</h3>`
    resultado.innerHTML= `${resultadoFinal}` 
    
    


    console.log(resultadoIMC)

    function resultadoFinal() {

        if (valorIMC < 15) {
            return "muito abaixo do peso"
    
        } else if (valorIMC > 15 && valorIMC < 18) {
            return "Abaixo do peso";
    
        } else if (valorIMC > 18 && valorIMC < 25) {
            return "Peso adequado";
    
        } else if (valorIMC > 25 && valorIMC < 28) {
            return "Acima do peso!";
            
        } else {
            return "Muito acima do peso!!!";
        }
        
    

    console.log(resultadoFinal)

}
}
