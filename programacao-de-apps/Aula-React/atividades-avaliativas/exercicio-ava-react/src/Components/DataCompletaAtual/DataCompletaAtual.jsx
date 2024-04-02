import "./DataCompletaAtual.css"

const DataCompletaAtual = () => {
    let time = new Date().getHours()
    let minutes = new Date().getMinutes()
    let date =new Date().getDate()
    let year = new Date().getFullYear()
    let month =new Date().getMonth()

    return (
        <div className="data__completa">
            {date}/{month.toFixed() + 1}/{year} {time}:{minutes} 

        </div>
    )
}

export default DataCompletaAtual