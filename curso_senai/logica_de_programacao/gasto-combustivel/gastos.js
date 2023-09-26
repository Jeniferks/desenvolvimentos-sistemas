function verificarValor() {
    let distancia = document.getElementById("inpDistancia");
    console.log(distancia.value);
    let consumo = document.getElementById("inpConsumo");
    console.log(consumo.value);
    let precoGasolina = document.getElementById("inpPrecoGasolina");
    console.log(distancia.value)
    
    
    

    let calculo = (distancia/consumo)*precoGasolina
    console.log(calculo)

    let resultado = document.getElementById("resultado")
    console.log(resultado)

    resultado.innerHTML = `<h1>Seu resultado será de R$${resultado.toFixed(2)}reais</h1>`;


}