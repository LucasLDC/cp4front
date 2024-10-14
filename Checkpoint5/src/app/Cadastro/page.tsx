import React from "react";
const PageCadastro = () => {
    return(
        <>
        <div className="Conteudo">
            <label htmlFor="">Nome
                <input type="text" />
            </label>
            <br />

            <label htmlFor="">Email
                <input type="text" />
            </label>
            <br />

            <label htmlFor="">Nome do pet
                <input type="text" />
            </label>
            <br />

            <label htmlFor="">Especie do seu pet
                <input type="radio" />Cachorro
                <input type="radio" />Gato
            </label>
            <br />

            <button type="submit">Enviar</button>
        </div>
        </>
    )
}

export default PageCadastro;