let firstNumber = Number(prompt("Insira o primeiro número para comparação:"))
let secondNumber = Number(prompt("Insira o segundo número"))

if (firstNumber > secondNumber){
    alert(`O número ${firstNumber} é maior que ${secondNumber}!`)
}else if(firstNumber < secondNumber){
    alert(`O número ${firstNumber} é menor que ${secondNumber}!`)
}else{
    alert(`Os números são iguais`)
}