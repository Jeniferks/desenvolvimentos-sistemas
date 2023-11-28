let inpDono = document.getElementById("inputDono")
let inpPet = document.getElementById("inputPet");
let inpIdade = document.getElementById("inputIdade")

let resultado = document.getElementById("result")
let inpPesquisa = document.getElementById("inputPesquisa")

let pets = []
let posSearch = "";

function cadastrar() {
    let pet = `Dono: ${inpDono.value} Nome: ${inpPet.value} Idade: ${inpIdade.value} `;

    pets.push(pet)
    inpPet.value = ''
    inpIdade.value = ''
    resultado.innerHTML = `<ol>${pets}</ol>`
        console.log(pets)
}

function pesquisar(){
    let petSearch = inpPesquisa.value
    
    posSearch = pets.indexOf(petSearch)
    
        if(petSearch == posSearch){
            alert(`Achei: ${pets}`)
            
        }else{
            alert("Nome não consta")
        }
}

function deletar(){

}

function editar(){

}

function excluir(){

}

function listar(){

}