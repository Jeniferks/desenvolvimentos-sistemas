let numUm = document.getElementById("input1")
let numDois = document.getElementById("input2")

function maiorNumero(){
    if((Number(numUm.value)) > (Number(numDois.value))){
        alert(`O número ${numUm.value} é maior que ${numDois.value}!`)
    }else if((Number(numUm.value)) < (Number(numDois.value))){
        alert(`O número ${numUm.value} é menor que ${numDois.value}`)
    }else{
        alert(`Os números são iguais`)
    }
}