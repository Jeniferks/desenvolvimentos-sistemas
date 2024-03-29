import "./DataAtual.css"

const DataAtual = () => {

    let date =new Date().getDate()

    return (
        <div className="data__atual">{date}</div>
    )
}

export default DataAtual


