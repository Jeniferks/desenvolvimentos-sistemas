import "./MinutoAtual.css"

const MinutoAtual = () => {
    let minutes = new Date().getMinutes()

    return (
        <div className="minuto__Atual">
            {minutes}
        </div>
    )
}

export default MinutoAtual