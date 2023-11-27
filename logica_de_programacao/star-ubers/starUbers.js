
let dist = document.getElementById("distanciaKm");

function calcularTempo(){
    let distancia = Number((dist.value))
    let tempo = distancia / 300000
    
    document.getElementById("divRes").innerHTML = `O tempo é de ${tempo.toFixed(3)}s`
    

}