import "./OlaPessoa.css"

const OlaPessoa = (props) => {
  
  const nome = props.nome

  return (
    
    <div className="ola__pessoa">
      Olá, {nome}!
    </div>
  )
}

export default OlaPessoa