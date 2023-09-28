let estruturaTorre = document.getElementById("inputEstrutura")
let destruirTorre = document.getElementById("inputDestruir")
let construirTorre = document.getElementById("inputConstruir")
let situacaoTorre = document.getElementById("inputSituacao")



function Destruir(){

    estruturaTorre.value = estruturaTorre.value - destruirTorre.value

    if(estruturaTorre.value <= 0){
        estruturaTorre.value = 0
        situacaoTorre.value = "Destruída"
        destruirTorre.disabled = true
        construirTorre.disabled = true
    }
}

function Construir(){

    estruturaTorre.value = Number(estruturaTorre.value) + Number(construirTorre.value)

}