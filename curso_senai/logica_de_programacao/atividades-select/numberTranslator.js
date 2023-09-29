let inputResultado = document.getElementById("inputResultado")
let labelWarning = document.getElementById("labelWarning")
let selectElement = document.getElementById("optionSelect")

function traduzir() {
    if(selectElement.value == 0){
        inputResultado.value = ""
        labelWarning.innerHTML = `Nenhuma opção escolhida`
    }else if(selectElement.value == 1){
        inputResultado.value = "Um"
        labelWarning.innerHTML = "Número traduzido com sucesso"

    }else if(selectElement.value == 2){
        inputResultado.value = "Dois"
        labelWarning.innerHTML = "Número traduzido com sucesso"

    }else if(selectElement.value == 3){
        inputResultado.value = "Três"
        labelWarning.innerHTML = "Número traduzido com sucesso"

    }else if(selectElement.value == 4){
        inputResultado.value = "Quatro"
        labelWarning.innerHTML = "Número traduzido com sucesso"

    }else{
        inputResultado.value = "Cinco"
        labelWarning.innerHTML = "Número traduzido com sucesso"

    }
    // inputResultado.value
    // labelWarning.value
    
    
}

function selectNumber(){
    console.log("teste")
}