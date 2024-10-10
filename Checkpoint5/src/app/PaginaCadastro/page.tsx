import React from "react";
const PageCadastro = () => {
    return(
        <>
            <label htmlFor="">Nome
                <input type="text" />
            </label>

            <label htmlFor="">Email
                <input type="text" />
            </label>

            <label htmlFor="">Nome do pet
                <input type="text" />
            </label>

            <label htmlFor="">Especie do seu pet
                <input type="radio" />Cachorro
                <input type="radio" />Gato
            </label>

            <button type="submit">Enviar</button>
        </>
    )
}

export default PageCadastro;