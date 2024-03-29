import "./AnoAtual.css"

const AnoAtual = () => {
    let year = new Date().getFullYear()
    return (
        <div className="ano__atual">
            {year}
        </div>
    )
}

export default AnoAtual