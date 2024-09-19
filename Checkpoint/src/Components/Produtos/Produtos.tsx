import { useState } from "react";

interface products{
    nome ? : string;
    preco ? : string;
    img ? : string;
    descricao ? : string;
}


<<<<<<< HEAD
const Produtos = ( props : products) => {
    const [contar, setCount] = useState(0);
=======
const Produtos = ( props : products ) => {
>>>>>>> 372834b2ab39f2f3d5e4fad12b138a51b24bd892
    return(

        <>
            <div className='card'>
                <h1> {props.nome} </h1>
                <img src={props.img} />
                <p>{props.preco} {props.descricao}</p>
                <p></p>
                <button onClick={() => setCount((contar) => contar + 1)}>
                count is {contar}
                </button>
            </div>
        </>
    )



}

export default Produtos;