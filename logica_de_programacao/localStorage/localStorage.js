//Método setItem salva uma chave com valor no localStorage

// localStorage.setItem("user", "jenifer")
// localStorage.setItem("age", 31)
// localStorage.setItem("password", "1234")

// let password = " abc123";
// let produtos = [" pipoca", "atum", "cerveja"]

// localStorage.setItem(" produtosSalvos", produtos);
// localStorage.setItem("senha", password)

//Método getItem busca uma chave no localStorage

// localStorage.getItem("clientes")

// Aula parte II

let elementoInputUser = document.getElementById("inpUser");
let userAdd = "";

function cadastraUser(){
    userAdd = elementoInputUser.value
    localStorage.setItem("userSalvos"), userAdd;

}