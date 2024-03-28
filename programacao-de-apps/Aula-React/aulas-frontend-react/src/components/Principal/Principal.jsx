import React from 'react';
import BotaoCustomizado from '../BotaoCustomizado/BotaoCustomizado';
import ListaProdutos from '../ListaProdutos/ListaProdutos';
import './Principal.css';
import BotaoContador from '../BotaoContador/BotaoContador';
import Formulário from '../Formulário/Formulário';

const Principal = () => {
  const [exemplo, setExemplo] = React.useState("");
  
  return (
    <main>
      <nav>
      <BotaoCustomizado tipo='primario' onClick={() => {setExemplo("ListaProdutos")}}>
        Lista Produtos
      </BotaoCustomizado>
      
      <BotaoCustomizado tipo="secundario" onClick={() => {setExemplo("botaoContador")}}>botaoContador</BotaoCustomizado>
      <BotaoCustomizado tipo="secundario" onClick={() => {setExemplo("Formulário")}}>Formulário</BotaoCustomizado>

      
      </nav>

      {exemplo === "ListaProdutos" && <ListaProdutos/>}
      {exemplo === "botaoContador" && <BotaoContador/>}
      {exemplo === "Formulário" && <Formulário/>}
    </main>
  );
};

export default Principal;
