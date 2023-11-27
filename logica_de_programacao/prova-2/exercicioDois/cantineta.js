let lancheSelect = document.getElementById("optionSelect");
let quantidade =  document.getElementById("inpQtd");
let preco = document.getElementById("inpPreco");
let total = document.getElementById("inpTotal")
let resultado = document.getElementById("lancheEscolhido")

function Calcular(){
        if((lancheSelect.value) && (quantidade.value <= 3)){
        let result = ((quantidade.value)*(optionSelect.value))
        
        preco.value = lancheSelect.value

        total.value = result
    
    }else{
        let result = ((quantidade.value)*(optionSelect.value))
        let resultDesconto = result - (result*0.172)

        preco.value = lancheSelect.value

        total.value = resultDesconto.toFixed(2)
        resultado.innerHTML = `<p>Você ganhou um desconto de 17,2%</p>`
    }

}


