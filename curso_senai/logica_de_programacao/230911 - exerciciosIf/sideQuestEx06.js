let userName = prompt("Qual seu nome de Usúario?")
let password = prompt("Digite uma senha com oito dígitos")

if(password.length >= 8){
    alert("Usúario cadastrado com sucesso!")
    console.log(`Usúario: ${userName}; \n Senha: ${password};`)
}else{
    alert("Insira uma senha com oito ou mais caracteres")
    console.log("A Senha deve conter oito ou mais caracteres")
}