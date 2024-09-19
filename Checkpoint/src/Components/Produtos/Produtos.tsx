interface products{
    nome ? : string;
    preco ? : string;
    img ? : string;
    descricao ? : string;
}


const Produtos = ( props : products ) => {
    return(

        <>
            <div className='card'>
                <h1> {props.nome} </h1>
                <img src={props.img} />
                <p>{props.preco} {props.descricao}</p>
                <p></p>
            </div>
        </>
    )



}

export default Produtos;