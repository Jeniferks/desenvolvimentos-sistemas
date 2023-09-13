let primeiroNumero = Number(prompt("Insira o primeiro número"))
let segundoNumero = Number(prompt("Insira o segundo número"))
let operacao = prompt("Qual operação deseja fazer?")


switch (operacao) {
    case "somar":
        alert(`A soma de ${primeiroNumero}+${segundoNumero} = ${primeiroNumero + segundoNumero}`)
        
        break;
    case "subtrair":
        alert(`A subtração de ${primeiroNumero}-${segundoNumero}=${primeiroNumero - segundoNumero}`)
        
        break;
    
    case "multiplicar":
        alert(`A multiplicação de  ${primeiroNumero}*${segundoNumero} = ${primeiroNumero * segundoNumero}`)
        break
    
    case "dividir":
        alert(`A divisão de  ${primeiroNumero}/${segundoNumero} = ${primeiroNumero / segundoNumero}`)
        break
    
    default:
        break;
}