/*Escreva um programa que pergunte ao usuário sua idade e imprima no console se ele
é maior ou menor de idade de acordo com a legislação brasileira vigente.*/

function exercicioQuatro(){
    let nome = prompt("Digite seu nome");
    let age = prompt("Digite sua idade");

    if (age >= 18){
        console.log(`Olá ${nome}, você já atingiu a maioridade`)
    }else{
        console.log(`Olá ${nome}, você ainda é considerado menor de idade`)
    }
}