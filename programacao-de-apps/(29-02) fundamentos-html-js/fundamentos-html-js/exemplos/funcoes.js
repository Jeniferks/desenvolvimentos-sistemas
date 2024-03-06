function exemploFuncoes() {
//   function mostrarAnoAtual() {
//     alert('Estamos no ano: ' + new Date().getFullYear());
//   }

//   mostrarAnoAtual; // não vai chamar a função não vai acontecer nada
//   mostrarAnoAtual(); // vai chamar a função e vai mostrar o ano atual

//   function saudacaoPersonalizada(nome) {
//     alert(`Olá ${nome}, bem-vindo!!`);
//   }
//   saudacaoPersonalizada('João');

//   function gerarNumeroAleatorio() {
//     return Math.random();
//   }

//   let numeroAleatorio = gerarNumeroAleatorio();
//   console.log(numeroAleatorio);

//   function somarDoisNumeros(numero1, numero2) {
//     return numero1 + numero2;
//   }

//   let resultado = somarDoisNumeros(10, 20);
//   console.log('resultado: ', resultado);

  console.log('##### ARROW FUNCTIONS #####');
  console.log('##### ARROW FUNCTIONS #####');
  console.log('##### ARROW FUNCTIONS #####');

  const mostrarAnoAtual = () => {
    alert('Estamos no ano: ' + new Date().getFullYear());
  };
  mostrarAnoAtual();

  const saudacaoPersonalizada = (nome) => {
    alert(`Olá ${nome}, bem-vindo!!`);
  };
  saudacaoPersonalizada('João');
}
