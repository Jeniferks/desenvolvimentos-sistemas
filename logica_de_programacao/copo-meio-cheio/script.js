function meioCheio() {
    let numero = document.getElementById("inpNumero").value
    let verificacao = (Math.sign(numero))
    let resultado = document.getElementById("divResult")

    console.log(verificacao)

    if(verificacao == 1) {
        resultado.innerHTML = `<h2>Seu número é positivo</h2>`
    }else if(verificacao == -1){
        resultado.innerHTML = `<h2>Seu número é negativo</h2>`
    }else{
        resultado.innerHTML = `<h2>Seu número é nulo</h2>`
    }
}