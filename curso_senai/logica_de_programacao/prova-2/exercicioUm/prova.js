let User = document.getElementById("inpUser");
let Password = document.getElementById("inpPassword")
let resultado = document.getElementById("result")

function userLogin(){

    if(User.value === "admin" && Password.value === "adm123"){

        resultado.innerHTML = `<h2 style="color: green">Olá! você está liberado para acesso!</h2>`

    }else{
        resultado.innerHTML = `<h2 style="color: red">Você não tem acesso a essa página</h2>`
    }

    
}