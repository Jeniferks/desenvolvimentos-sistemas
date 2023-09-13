let grade = Number(prompt("Insira qual foi a sua nota:"));

if(grade >= 90 && grade <= 100){
    alert("Sua classificação foi A");
}else if (grade >=80){
    alert("Sua classificação foi B");
}else if (grade >= 70){
    alert("Sua classificação foi C");
}else if(grade >=60){
    alert("Sua classificação foi D")
}else{
    alert("Sua classificação foi F")
}