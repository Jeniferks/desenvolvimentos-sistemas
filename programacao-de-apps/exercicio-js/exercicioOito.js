/*Crie um array com 3 frutas e imprima cada uma no console.
Adicione mais uma fruta ao array e imprima o array atualizado.
Remova a última fruta do array e imprima o array atualizado.*/

function exercicioOito(){
    const frutas = ["melão", "banana", "abacaxi"];
    console.log(frutas)

    frutas.push("melancia")
    console.log(frutas)

    frutas.pop();
    console.log(frutas)
}

