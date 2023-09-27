function gastoGasolina(){
    let distancia = document.getElementById("inpDistancia").value
    let consumo = document.getElementById("inpConsumo").value
    let preco = document.getElementById("inpPreco").value

    let calculo = ( distancia / consumo) * preco

    let resultado = document.getElementById("resultado")
    
    resultado.innerHTML = `<h3>O valor total foi de R$${calculo.toFixed(2)} reais</h3>`
    
}
