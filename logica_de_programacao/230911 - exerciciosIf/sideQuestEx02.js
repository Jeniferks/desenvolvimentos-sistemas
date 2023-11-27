let aleatorio, chute
// aleatorio = Math.random() * 10
chute = Number(prompt("Chute um número de 1 a 10: "))
aleatorio = Math.ceil(Math.random() * 10)



if (chute == aleatorio){
    alert(`Você chutou ${chute} e acertou`)
}else{
    alert(`Você chutou ${chute} e era ${aleatorio}`)
}
console.log(aleatorio)