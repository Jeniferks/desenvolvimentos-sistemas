import React from 'react'

const Formulário = () => {
    const [campoNome, setCampoNome] = React.useState("");
    const [campoCor, setCampoCor] = React.useState("#000000");

    const alterarCampoNome = (event) => {
        setCampoNome(event.target.value);
    }

    const alterarCampoCor = (event) => {
        setCampoCor(event.target.value);
    }

    return (
        <div>
            <input type="text" value={campoNome} onChange={alterarCampoNome} placeholder='Nome' />
            <input type="color" value={campoCor} onChange={alterarCampoCor} placeholder='Cor' />
        </div>
    )
}

export default Formulário