interface Product {
    nome ?: string;
    preco ?: string;
    img ?: string;
    descricao ?: string;
  }
  
  const Produtos: React.FC<Product> = (props) => {
    return (
      <div className='card'>
        <h1>{props.nome}</h1>
        <img src={props.img} alt={props.nome} />
        <p>{props.preco} {props.descricao}</p>
      </div>
    );
  }
  
  export default Produtos;
  