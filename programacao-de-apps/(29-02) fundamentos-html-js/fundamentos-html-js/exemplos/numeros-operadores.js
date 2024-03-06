function exemploNumerosOperadores() {
  const soma = 100 + 50; // 150
  console.log('soma 100 + 50', soma);

  const subtracao = 100 - 50; // 50
  console.log('subtracao 100 - 50', subtracao);

  const multiplicacao = 100 * 2; // 200
  console.log('multiplicacao 100 * 2', multiplicacao);

  const divisao = 100 / 2; // 50
  console.log('divisao100 / 2', divisao);

  //   const numeroUm = prompt('Digite o primeiro número');
  //   const numeroDois = prompt('Digite o segundo número');

  //   console.log('soma', Number(numeroUm) + Number(numeroDois));

  const expoente = 3 ** 2; // 9 "Ao Quadrado"
  const modulo = 15 % 2; // 1"Resto da divisão"

  const numero = 10;
  const ehPar = numero % 2 === 0;
  console.log('ehPar', ehPar);

  console.log('##### ####');

  const numeroTesteNan = prompt('Digite um número para multimiplicar por 2');
//   console.log('O nunero multiplado por 2 é', numeroTesteNan * 2);

  if (isNaN(numeroTesteNan)) {
    console.log('Não é um número');
  } else {
    console.log('O nunero multiplado por 2 é', numeroTesteNan * 2);
  }
}
