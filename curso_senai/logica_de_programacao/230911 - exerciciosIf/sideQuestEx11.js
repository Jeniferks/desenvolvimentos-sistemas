let saldo = Number(prompt("Insira o saldo da sua conta: "))
let valorProduto = Number(prompt("Insira o valor do produto: "))

if(saldo >= valorProduto ){
    alert("Você pode comprar esse produto")
}else{
    alert(`Infelizmente você não pode comprar esse produto, seu saldo é de R$${saldo}`)
}