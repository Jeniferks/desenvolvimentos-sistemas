function exemploBooleanCondicionais() {
  const diaSemana = 3; //Number(prompt('Digite um dia da semana: '));

  if (diaSemana === 1) {
    console.log('Segunda-feira');
  } else if (diaSemana === 2) {
    console.log('Terça-feira');
  } else if (diaSemana === 3) {
    console.log('Quarta-feira');
  } else if (diaSemana === 4) {
    console.log('Quinta-feira');
  } else if (diaSemana === 5) {
    console.log('Sexta-feira');
  } else if (diaSemana === 6) {
    console.log('Sábado');
  } else if (diaSemana === 7) {
    console.log('Domingo');
  } else {
    console.log('Dia inválido');
  }

  switch (diaSemana) {
    case 1:
      console.log('Segunda-feira');
      break;
    case 2:
      console.log('Terça-feira');
      break;
    case 3:
      console.log('Quarta-feira');
      break;
    case 4:
      console.log('Quinta-feira');
      break;
    case 5:
      console.log('Sexta-feira');
      break;
    case 6:
      console.log('Sábado');
      break;
    case 7:
      console.log('Domingo');
      break;
    default:
      console.log('Dia inválido');
      break;
  }

  const idade = Number(prompt('Digite sua idade: '));

  if (idade > 17) {
    alert('Maior de idade');
  } else {
    alert('Menor de idade');
  }

  const fulanoEhMaiorIdade = idade >= 18;

  if (!fulanoEhMaiorIdade) {
    alert('Menor de idade');
  } else {
    alert('Maior de idade');
  }

  const idadTeste = 25;
  const possuiCNH = false;

  if (idadTeste >= 18 && !possuiCNH) {
    console.log('Poderias ter CNH, mas não tens!');
  }

  if (possuiCNH || idade >= 18) {
    console.log('Podes entrar na festa!');
  }
}
