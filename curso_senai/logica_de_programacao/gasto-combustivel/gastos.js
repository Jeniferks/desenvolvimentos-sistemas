function verificar() {
    let distancia = document.getElementById("inpDistancia");
    let consumo = document.getElementById("inpConsumo");
    let precoGasolina = document.getElementById("inpPrecoGasolina");

    console.log(distancia.value)
    console.log(consumo.value)
    console.log(precoGasolina.value)

    let calculo = (distancia/consumo)*precoGasolina
    console.log(calculo)


}