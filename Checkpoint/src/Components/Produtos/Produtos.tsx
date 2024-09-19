import { useState } from "react";

interface products{
    nome : string;
    preco: string;
    img: string;
    descricao : string;
}


const Produtos = ( props : products) => {
    const [count, setCount] = useState();
    return(

        <>
            <div className='card'>
                <h1> {props.nome} </h1>
                <img src={props.img} />
                <p>{props.preco} {props.descricao}</p>
                <p></p>
                <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
                </button>
            </div>
        </>
    )



}

export default Produtos;