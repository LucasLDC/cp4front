import React, { useState } from 'react';
import Produtos from '../Produtos/Produtos';

interface Product {
  nome: string;
  preco: string;
  img: string;
  descricao: string;
}

const DetalhesProdutos: React.FC = () => {
  const [produtosAdicionados, setProdutosAdicionados] = useState<Product[]>([]);

  const adicionarProduto = (produto: Product) => {
    if (produtosAdicionados.length < 4) {
      setProdutosAdicionados([...produtosAdicionados, produto]);
    }
  };

  const removerProduto = (indexToRemove: number) => {
    setProdutosAdicionados(produtosAdicionados.filter((_, index) => index !== indexToRemove));
  };

  return (
    <>
      <h2>Detalhes dos Produtos</h2>
      <button onClick={() => adicionarProduto({ nome: 'BATATA', preco: 'R$2,00', img: '/img/BATATA.jpg', descricao: 'Batata de qualidade' })}>
        Adicionar BATATA
      </button>

      <button onClick={() => adicionarProduto({ nome: 'LEITE INTEGRAL', preco: 'R$5,00', img: '/img/LEITE.jpg', descricao: 'Leite Integral' })}>
        Adicionar LEITE INTEGRAL
      </button>

      {produtosAdicionados.map((produto, index) => (
        <div key={index}>
          <Produtos nome={produto.nome} preco={produto.preco} img={produto.img} descricao={produto.descricao} />
          <button onClick={() => removerProduto(index)}>Remover</button>
        </div>
      ))}
    </>
  );
}

export default DetalhesProdutos;
