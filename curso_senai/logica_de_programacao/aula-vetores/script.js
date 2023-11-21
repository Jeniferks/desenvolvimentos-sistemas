let inpPet = document.getElementById("inputPet");
let inpIdade = document.getElementById("inputIdade")

let resultado = document.getElementById("result")
let inpPesquisa = document.getElementById("inputPesquisa")
let pets = []

function cadastrar() {
    let pet = `Nome: ${inpPet.value}, Idade: ${inpIdade.value} <br>`;

    pets.push(pet)
    inpPet.value = ''
    inpIdade.value = ''
    resultado.innerHTML = `<ol>${pets}</ol>`
        console.log(pets)
}

function pesquisar(){
    let petSearch = inpPesquisa.value
    for(i = 0; i < pets.length; i++){
        console.log(pets[i])
        if(petSearch == pets[i]){
            alert(`Achei: ${pets[i]}`)
            break
        }else{
            alert("Nome não consta")
        }
    }
}