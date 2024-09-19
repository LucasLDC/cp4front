import { useState } from "react";

interface products{
    nome : string;
    preco: string;
    img: string;
    descricao : string;
}


const Produtos = ( props : products) => {
    const [contar, setCount] = useState(0);
    return(

        <>
            <div className='card'>
                <h1> {props.nome} </h1>
                <img src={props.img} />
                <p>{props.preco} {props.descricao}</p>
                <p></p>
                <button onClick={() => setCount((contar) => contar + 1)}>
                adicionar produto {contar}
                </button>
            </div>
        </>
    )



}

export default Produtos;