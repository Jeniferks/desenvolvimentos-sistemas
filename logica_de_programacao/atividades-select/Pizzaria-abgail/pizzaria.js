let pizzaSelect = document.getElementById("optionSelect")
let pizzaLabel = document.getElementById("pizzaEscolhida")

function comprar() {

    if((pizzaSelect.value) < 50){
        pizzaLabel.innerHTML = `Valor = R$${(optionSelect.value)},00`
    }else{
        pizzaLabel.innerHTML = `Valor = R$${optionSelect.value},00 <br>
        Valor com desconto = R$${((optionSelect.value) - (optionSelect.value) * 0.15)}`
    }

    // console.log((pizzaSelect.value))
    // console.log((pizzaLabel.value))

    // switch ((pizzaSelect.value)) {
    //     case "Lombinho":
            
    //         pizzaLabel.innerHTML = `Lombinho = R$20`
    //         break;

    //     case "Calabresa":
    //         pizzaLabel.innerHTML = `Calabresa = R$25`
    //         break;
    //     case "Portuguesa":
    //         pizzaLabel.innerHTML = `Portuguesa = R$28`
    //         break;
    //     case "Camarão":
    //         pizzaLabel.innerHTML = `Camarão R$63,00`
    //         pizzaLabel.innerHTML = `Camarão R$63,00`
    //         break;

    //     default:
    //         pizzaLabel.innerHTML = `selecione uma pizza`
    //         break;
    // }
}