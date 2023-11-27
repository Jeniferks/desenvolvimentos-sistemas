// IMC = Peso ÷ (Altura × Altura)
    let peso = document.getElementById("inpPeso")
    let altura = document.getElementById("inpAltura")
    let resultadoIMC = document.getElementById("result__imc")
    let resultado = document.getElementById("inpt__result")

function calculoIMC() {
    
    // let valorIMC = peso / (altura * altura)
    
    resultadoIMC.value = (peso.value) / ((altura.value) * (altura.value))

    resultadoIMC.innerHTML = `<h3> IMC: ${(resultadoIMC.value).toFixed(2)}</h3>`

    console.log(resultadoIMC.value)

    if (resultadoIMC.value < 15) {

        resultado.value = 'Muito abaixo do peso'

    } else if (resultadoIMC.value >= 15 && resultadoIMC.value < 18) {
        resultado.value =  "Abaixo do peso";

    } else if (resultadoIMC.value > 18 && resultadoIMC.value < 25) {
        resultado.value =  "Peso adequado";

    } else if (resultadoIMC.value > 25 && resultadoIMC.value < 28) {
        resultado.value =  "Acima do peso!";
        
    } else {
        resultado.value =  "Muito acima do peso!!!";
    }

    console.log(resultadoIMC.value)


}

function Resultado() {

    
    
}
