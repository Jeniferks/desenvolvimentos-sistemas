let elementoCheckbox = document.getElementById('chckbx')
let elementoRadioUm = document.getElementById('rdUm')
let elementoRadioDois = document.getElementById('rdDois')

function VerificaCheck(){

    if(elementoRadioUm.checked == true){

        alert(`A fruta selecionada foi ${elementoRadioUm.value}`)
        
    }
 
}