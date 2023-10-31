let elementoDivResultado = document.getElementById("divResultado")
let elementoDivResultadoDois = document.getElementById("divResultadoDois")
let cont
let contDois

cont = 0;
while(cont < 10){
    cont++
    elementoDivResultado.innerHTML += `${cont}<br>`
    
}

contDois = 11
while(contDois > 1){
    contDois--
    elementoDivResultadoDois.innerHTML += `${contDois}<br>`
    
}