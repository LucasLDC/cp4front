import React, { useState } from 'react';
import Produtos from '../Produtos/Produtos';

interface Product {
  nome ?: string;
  preco ?: string;
  img ?: string;
  descricao ?: string;
}

const DetalhesProduto: React.FC = () => {
  const [produto, setProduto] = useState<Product | null>(null);

  const adicionarProduto = () => {
    const novoProduto: Product = {
      nome: 'Produto Exemplo',
      preco: 'R$ 100,00',
      img: '/img/LEITE.jpg',
      descricao: 'LEEEEITE'
    };
    setProduto(novoProduto);
  };

  const removerProduto = () => {
    setProduto(null);
  };

  return (
    <div>
      <h2>Detalhes do Produto</h2>
      {produto ? (
        <Produtos
          nome={produto.nome}
          preco={produto.preco}
          img={produto.img}
          descricao={produto.descricao}
        />
      ) : (
        <p>Nenhum produto selecionado.</p>
      )}
      <div>
        <button onClick={adicionarProduto}>Adicionar Produto</button>
        <button onClick={removerProduto} disabled={!produto}>Remover Produto</button>
      </div>
    </div>
  );
};

export default DetalhesProduto;

