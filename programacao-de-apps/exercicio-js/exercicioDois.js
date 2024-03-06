/*Escreva um programa que solicite ao usuário dois números e exiba o resultado da soma, 
subtração, multiplicação e divisão desses números no console, exemplo:*/
// A = 10; B = 5;
// “A + B = 15”
// “A - B = 5”
// “A * B = 50”
// “A / B = 2”

function exercicioDois() {
    let primeiroNumero = Number(prompt("Insira o primeiro número"));
    let segundoNumero = Number(prompt("Insira o primeiro número"));

    let soma = primeiroNumero + segundoNumero;
    let subtracao = primeiroNumero - segundoNumero;
    let divisao = primeiroNumero / segundoNumero;
    let multiplicacao = primeiroNumero * segundoNumero;

    console.log(
        `A soma de ${primeiroNumero} + ${segundoNumero} é = ${soma}.
        A subtração de ${primeiroNumero} - ${segundoNumero} é = ${subtracao}.
        A divisão de ${primeiroNumero} / ${segundoNumero} é = ${divisao} .
        A multiplicação de ${primeiroNumero} * ${segundoNumero} é = ${multiplicacao}.`
    );
}
