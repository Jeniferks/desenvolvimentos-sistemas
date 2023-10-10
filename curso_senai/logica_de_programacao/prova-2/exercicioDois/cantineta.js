let lancheSelect = document.getElementById("optionSelect");
let quantidade =  document.getElementById("inpQtd");
let preco = document.getElementById("inpPreco");
let total = document.getElementById("inpTotal")
let resultado = document.getElementById("lancheEscolhido")

function Calcular(){
        if((lancheSelect.value)){
        let result = ((quantidade.value)*(optionSelect.value))
        
        preco.value = lancheSelect.value

        total.value = result
    
    }

}


