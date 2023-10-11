let User = document.getElementById("inpUser");
let Password = document.getElementById("inpPassword")
let resultado = document.getElementById("result")

function userLogin(){

    if(User.value === "admin" && Password.value === "adm123"){

        resultado.innerHTML = `<h2 style="color: green">Acesso liberado!</h2>`

    }else{
        resultado.innerHTML = `<h2 style="color: red">ACESSO NEGADO!!!</h2>`
    }

    
}