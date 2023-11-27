let tabuada=prompt('Deseja qual tabuada?')
let i = 0

for(i=0;i<=10;i++){
    document.getElementById("divTab").innerHTML+=i+"x"+tabuada+'='+(i*tabuada)+"<br>"
}

