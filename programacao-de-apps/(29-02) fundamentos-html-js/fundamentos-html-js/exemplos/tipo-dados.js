function exemploTiposDados() {
  const nome = 'TAC Play'; // String
  console.log(nome);
  console.log(typeof nome);

  const idade = 18; // Number
  console.log(idade);
  console.log(typeof idade);

  const possuiFaculdade = true; // Boolean
  console.log(possuiFaculdade);
  console.log(typeof possuiFaculdade);

  let time; // Undefined
  console.log(time);
  console.log(typeof time);

  const comida = null; // Null
  console.log(comida);
  console.log(typeof comida);

  const novoObjeto = {}; // Object
  console.log(novoObjeto);
  console.log(typeof novoObjeto);

  console.log('##### #####');

  const gols = 1000;
  const frase1 = 'Pelé fez ' + gols + ' gols';
  const frase2 = `Pelé fez ${gols} gols`; // Utilizando Template String

  console.log('Frase:', frase2);

  // Strings podem ser com aspas simples ou dupla
  const primeiraString = 'teste';
  const segundaString = 'teste';

  const fraseExemplo = 'JavaScript é "super" fácil';
  const fraseExemplo2 = "JavaScript é 'super' fácil";

  console.log('##### ##### #####');
  const numero = prompt('Informe um número:');
  console.log('O tipo informado é:', typeof numero);
}
