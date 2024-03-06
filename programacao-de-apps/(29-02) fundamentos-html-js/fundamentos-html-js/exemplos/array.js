function exemploArray() {
  const numeros = [111, 222, 333, 444, 555, 666, 777, 888, 999, 1010];

  console.log('Posição 0:', numeros[0]);
  console.log('Posição inválida:', numeros[50]);

  console.log('Tamanho do array:', numeros.length);

  numeros.push(567);

  console.log(numeros);

  numeros.push(new Date());

  numeros.pop();

  console.log('##### Array de Objetos #####');
  const usuarios = [];

  usuarios.push({ nome: 'João', idade: 20, senha: '123456' });
  usuarios.push({ nome: 'Maria', idade: 25, senha: '123456' });
  usuarios.push({ nome: 'José', idade: 30, senha: '123456' });
  usuarios.push({ nome: 'Ana', idade: 35, senha: '123456' });
  usuarios.push({ nome: 'Pedro', idade: 40, senha: '123456' });

  console.log('veriricar se é array:', Array.isArray(usuarios));

  console.log('ultima posicao do array:', usuarios[usuarios.length - 1]);

  console.log('acessar um objeto especifico:', usuarios[1].nome);

  console.log('##### Loops #####');
  for (let indice = 0; indice <= 20; indice++) {
    console.log(indice);
  }

  for (let indice = 1; indice <= 50; indice += 5) {
    console.log(indice);
  }

  for (let i = 0; i <= usuarios.length - 1; i++) {
    console.log(usuarios[i].nome);
  }

  for (let i = 0; i <= usuarios.length - 1; i++) {
    console.log(usuarios[i].nome);
    if (usuarios[i].nome === 'Ana') {
      console.log('Encontrei a Ana!');
      break;
    }
  }

  console.log('##### EXEMPLOS #####');
  const anosGanhouACopa = [1959, 1962, 1970, 1994, 2002];
  for (let i = 0; i <= anosGanhouACopa.length - 1; i++) {
    console.log(`O brasil ganhou a copa de ${anosGanhouACopa[i]}`);
  }
}
