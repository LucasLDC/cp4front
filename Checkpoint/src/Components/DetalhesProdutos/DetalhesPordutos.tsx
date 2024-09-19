import Produtos from "../Produtos/Produtos";

const DetalhesProdutos = () => {

    return (
        <>
            <h2>detalhes produtos</h2>
            <Produtos nome="BATATA" preco="R$2,00" img="\img\BATATA.jpg" descricao="batata de qualidade"/>

            <Produtos nome="LEITE INTEGRAL" preco="R$ 5,00" img="\img\LEITE.jpg" descricao="Leite Integral"/>
        </>
    )
}

export default DetalhesProdutos;