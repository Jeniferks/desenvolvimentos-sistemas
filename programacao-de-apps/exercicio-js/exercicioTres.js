/*Escreva um programa que solicite ao usuário um número e verifique se o número
é maior que 10. Se for, imprima no console "O número é maior que 10", caso contrário,
imprima "O número é menor ou igual a 10".*/

function exercicioTres() {
    let userNumber = prompt("Digite um número");

    if (userNumber > 10) {
        console.log(`${userNumber} é maior que 10!`);
    } else if (userNumber < 10) {
        console.log(`${userNumber} é menor que 10!`);
    } else {
        console.log(`${userNumber} é igual a 10!`);
    }
}
