

function countCoins() {
    
    let preco = Number(document.getElementById("inpPreco").value)
    let umReal = Number(document.getElementById("inp1Real").value);
    let cinquentaCentavos = Number(document.getElementById("inp50Centavos").value);
    let vinteCincoCentavos = Number(document.getElementById("inp25Centavos").value);
    let dezCentavos = Number(document.getElementById("inp10Centavos").value);
    let cincoCentavos = Number(document.getElementById("inp05Centavos").value);
    let resultado = document.getElementById("divResultado")

    let somaMoedas = 1*umReal + 0.50*cinquentaCentavos + 0.25*vinteCincoCentavos + 0.10*dezCentavos + 0.05*cincoCentavos
    
    resultado.innerHTML = `<h2>Preço do produto: R$${preco.toFixed(2)}</h2>`

    if(somaMoedas >= preco ){
        resultado.innerHTML += `<h2 style= "color: green">Você tem R$${somaMoedas.toFixed(2)} reais e consegue comprar esse produto!</h2> `
    }else{
        resultado.innerHTML += `<h2 style= "color: red">Você tem R$${somaMoedas.toFixed(2)} reais e  não consegue comprar esse produto!</h2>`
    }

}

//+= significa  resultado = resultado + variavel (acrescenta novo valor no valor que já existe, nao substitui o que ja tinha)