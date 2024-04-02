import "./MesAtual.css"

const MesAtual = () => {
  let month =new Date().getMonth()
  return (
    
    <div className="mes__atual">
      {month}
    </div>
  )
}

export default MesAtual