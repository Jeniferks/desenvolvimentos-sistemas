let userName = prompt("Insira seu nome: ")
let password = prompt("Insira sua senha")

if (password === "abracadabra" || password == "Abracadabra" || password == "ABRACADADRA"){
    alert(`Olá ${userName}, você acessou uma mensagem secreta`)

}else{
    alert(`Nenhuma mensagem para você ${userName}`)
}