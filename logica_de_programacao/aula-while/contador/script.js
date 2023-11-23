
let elementoinpNumeroUm = document.getElementById("inpNumeroUm")
let elementoResultadoUm = document.getElementById("resultadoUm")
let elementoresultadoDois = document.getElementById("resultadoDois")


function ordemCrescente() {

    let contador = elementoinpNumeroUm.value
    let cont = 0
    while (contador != cont) {
        elementoResultadoUm.innerHTML += `<p style=" display:flex; flex-direction: column;  border: 2px solid black;  width: 50px; margin:20px; margin-left: 43px;"> ${(cont++)+1}<br></p>`
        elementoinpNumeroUm.value = ""


    }
}

function ordemDecrescente() {


    let contador = elementoinpNumeroUm.value
    let cont = 0

    while (contador > cont) {

        elementoresultadoDois.innerHTML += `<p style=" display:flex; flex-direction: column;  border: 2px solid black;  width: 50px; margin:20px; margin-left: 43px;"> ${contador--}</p>`
        elementoinpNumeroUm.value = ""
    }



    console.log(elementoinpNumeroUm.value)



}

