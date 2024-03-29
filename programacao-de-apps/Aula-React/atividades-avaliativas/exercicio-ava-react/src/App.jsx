import './App.css'
import OlaMundo from './Components/OlaMundo/OlaMundo'
import DataAtual from './Components/DataAtual/DataAtual'
import MesAtual from "./Components/MesAtual/MesAtual"
import AnoAtual from "./Components/AnoAtual/AnoAtual"
import HoraAtual from "./Components/HoraAtual/HoraAtual"
import MinutoAtual from "./Components/MinutoAtual/MinutoAtual"
import DataCompletaAtual from './Components/DataCompletaAtual/DataCompletaAtual'
import OlaPessoa from "./Components/OlaPessoa/OlaPessoa"
import ListaProdutos from "./Components/ListaProdutos/ListaProdutos"
import VerificarIdade from "./Components/VerificarIdade/VerificarIdade"
import NumerosPares from "./Components/NumerosPares/NumerosPares"
import NumerosImpares from "./Components/NumerosImpares/NumerosImpares"
import Soma from "./Components/Soma/Soma"
import Substracao from "./Components/Subtracao/Subtracao"
import Divisao from "./Components/Divisao/Divisao"
import Multiplicacao from "./Components/Multiplicacao/Multiplicacao"
import Calculadora from "./Components/Calculadora/Calculadora"
import NomesOrdenados from "./Components/NomesOrdenados/NomesOrdenados"

function App() {
  

  return (
    <>
      <OlaMundo/>
      <DataAtual/>
      <MesAtual/>
      <AnoAtual/>
      <HoraAtual/>
      <MinutoAtual/>
      <DataCompletaAtual/>
      <OlaPessoa nome = "Jenifer Kindermann"/>
      <ListaProdutos item = "Celular" />
      <ListaProdutos item = "Capinha" />
      <ListaProdutos item = "Pelicula" />
      <VerificarIdade/>
      <NumerosPares/>
      <NumerosImpares/>
      <Soma/>
      <Substracao/>
      <Divisao/>
      <Multiplicacao/>
      <Calculadora/>
      <NomesOrdenados/>
    
      
      
    </>
  )
}

export default App
