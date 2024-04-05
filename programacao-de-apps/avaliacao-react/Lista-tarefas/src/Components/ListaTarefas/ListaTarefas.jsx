import "./ListaTarefas.css"
import React from 'react'

const ListaTarefas = () => {
    const [tarefa, setTarefa] = React.useState("")
    const [listaTarefas, setListaTarefas] = React.useState([])
    const [contador, setContador] = React.useState(0)

    function handleInput(event){
        const inputTarefa = event.target.value;

        setTarefa(inputTarefa)
    }

    function adicionarItem(event){
        event.preventDefault()

        if(!tarefa){
            return(
                alert("coloque uma tarefa")
            )
        }

        

        setContador(contador + 1)
        setListaTarefas([...listaTarefas, tarefa])
    }

    function removerItem(event){
        event.preventDefault()


        
        setContador(contador - 1)
        setListaTarefas([tarefa])
    }


    return (
    <div className="tarefas">
        <h1>Lista Tarefas {contador}</h1>
        <form onSubmit={adicionarItem}>
        <input id="inpTarefa" type="text" placeholder="Descrição da Tarefa" onChange={handleInput} value={tarefa}/>
        <button className="btn__add" type="submit">Adicionar</button>
        </form>
        <form onSubmit={removerItem}>
            <ol className="lista__tarefas">
        {listaTarefas.map((item, index) => (
            <li key={index}>{item}<button className="btn__rmv" >remover</button></li>
        ))} 
        
        </ol>
        </form>
        
        
    </div>
  )
}

export default ListaTarefas