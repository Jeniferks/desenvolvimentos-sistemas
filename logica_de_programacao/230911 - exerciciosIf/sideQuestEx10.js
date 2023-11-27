let year = Number(prompt("Insira um ano: "))

if (year % 4 == 0 && year % 100 != 0){
    alert("O ano é bissexto")
}else{
    alert("O ano não é bissexto")
}