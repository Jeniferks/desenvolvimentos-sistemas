/*Escreva uma função que recebe uma string como argumento, e imprima no console o resultado com a seguinte condições:
”Tamanho até 5 carácteres = pequena”, ”Tamanho até 10 carácteres = média”, ”Tamanho a cima de 10 carácteres = grande”
Exemplo de resultado: “A string ‘aplicativos’ é grande.”*/

function exercicioDez(){
    let argumentStr = prompt("Digite uma palavra qualquer")

    if (argumentStr.length > 5){
        console.log(`A string ${argumentStr} é grande`)
    }else{
        console.log(`A string ${argumentStr} é pequena`)
    }


}