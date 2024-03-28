import React from 'react'
import "./BotaoContador.css"

const BotaoContador = () => {
    const [numero, setNumero] = React.useState(0)

    const incrementar = () => {
        setNumero(numero + 1)
    }
    return (
        <button onClick={incrementar}>{numero}</button>
    )
}

export default BotaoContador