import "./HoraAtual.css"

const HoraAtual = () => {
  let time = new Date().getHours()
  


  return (
    <div className="hora__atual">
      {time}
    </div>
  )
}

export default HoraAtual