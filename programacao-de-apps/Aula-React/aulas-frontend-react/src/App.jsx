import './App.css';
import Cabecalho from './components/Cabecalho/Cabecalho';
import LadoEsquerdo from './components/LadoEsquerdo/LadoEsquerdo';
import Principal from './components/Principal/Principal';
import Footer from './components/Footer/Footer';

function App() {
  console.log('App render...');

  return (
    <>
      <Cabecalho></Cabecalho>
      <LadoEsquerdo></LadoEsquerdo>
      <Principal></Principal>
      <Footer></Footer>
    </>
  );
}

export default App;
