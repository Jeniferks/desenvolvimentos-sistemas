let users = [];

let elementoInputUser = document.getElementById("inpUser");
let elementoDivLista = document.getElementById("lista");

function Cadastrar(){
    
    users.push(elementoInputUser.value)
    // elementoDivLista.innerHTML = `<ol>${users} </ol>`
    
    alert("Usuário cadastrado")
    console.log(users)
}

function Pesquisar(){

    if(users.includes(elementoInputUser.value)){
        elementoDivLista.innerHTML = `<h2> Encontrado :)</h2>`
    }else{
        elementoDivLista.innerHTML = `<h2>Não Encontrado!!</h2>`
    }
    
}

function Listar(){
    elementoDivLista.innerHTML = `<ol>${users} </ol>`
}

function Editar(){
    users.splice(elementoInputUser.value)

}

function Excluir(){
    users.splice(elementoInputUser.value)
}


