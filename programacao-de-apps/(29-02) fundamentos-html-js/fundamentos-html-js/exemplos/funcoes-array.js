function exemploFuncoesArray() {
  let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const numerosPares = numeros.filter((numero) => {
    if (numero % 2 === 0) {
      return true;
    } else {
      return false;
    }
  });

  console.log(numerosPares);

  let pessoas = [
    { nome: 'João', idade: 25 },
    { nome: 'Maria', idade: 30 },
    { nome: 'Pedro', idade: 17 },
    { nome: 'Ana', idade: 20 },
  ];

  const pessoasMaiorIdade = pessoas.filter((item) => {
    if (item.idade >= 18) {
      return true;
    }
  });

  console.log('Pessoas maiores de idade:', pessoasMaiorIdade);

  console.log('##### MAP #####');
  numeros = [1, 2, 3, 4, 5];

  const numerosVezesDois = numeros.map((item) => {
    return item * 2;
  });

  console.log('Numeros vezes dois:', numerosVezesDois);

  // retorna um array com os nomes das pessoas
  pessoas = [
    { nome: 'João', sobrenome: 'Silva', idade: 25 },
    { nome: 'Maria', sobrenome: 'Souza', idade: 30 },
    { nome: 'Pedro', sobrenome: 'Prado', idade: 17 },
    { nome: 'Ana', sobrenome: 'Test', idade: 20 },
  ];
  const somenteNome = pessoas.map((item) => {
    return item.nome;
  });
  console.log('Somente nome:', somenteNome);
  const novasPessoas = pessoas.map((item) => {
    return {
      nome: item.nome,
      sobrenome: item.sobrenome,
      nomeCompleto: item.nome + ' ' + item.sobrenome,
      idade: item.idade,
      maiorIdade: item.idade >= 18,
    };
  });

  console.log('Novas pessoas:', novasPessoas);
}
