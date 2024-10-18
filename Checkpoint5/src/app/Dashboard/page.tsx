'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import './Dashboard.css';

interface Produto {
  id: number;
  nome: string;
  preco: number;
}

const Dashboard = () => {
  const [usuario, setUsuario] = useState({
    nome: '',
    email: '',
    senha: '',
    nomePet: '',
    especiePet: '',
    isLogged: true
  });
  const [editando, setEditando] = useState(false);
  const [servicos, setServicos] = useState([]);
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [carrinho, setCarrinho] = useState<Produto[]>([]);
  const router = useRouter();

  useEffect(() => {
    const usuarioArmazenado = localStorage.getItem('user');
    const servicosArmazenados = localStorage.getItem('servicos');
    const carrinhoArmazenado = sessionStorage.getItem('carrinho');

    if (usuarioArmazenado) {
      setUsuario(JSON.parse(usuarioArmazenado));
    } else {
      router.push('/Login');
    }

    if (servicosArmazenados) {
      setServicos(JSON.parse(servicosArmazenados));
    }

    if (carrinhoArmazenado) {
      setCarrinho(JSON.parse(carrinhoArmazenado));
    }
  }, [router]);

  useEffect(() => {
    const buscarProdutos = async () => {
      try {
        const res = await fetch('/api/products.json');
        const data = await res.json();
        setProdutos(data);
      } catch (error) {
        console.error('Erro ao buscar os produtos:', error);
      }
    }
    buscarProdutos();
  }, []);

  useEffect(() => {
    sessionStorage.setItem('carrinho', JSON.stringify(carrinho));
  }, [carrinho]);

  const manipularEdicao = () => {
    setEditando(true);
  };

  const manipularMudanca = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsuario({ ...usuario, [e.target.name]: e.target.value });
  };

  const manipularSalvar = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('user', JSON.stringify(usuario));
    setEditando(false);
  };

  const adicionarAoCarrinho = (produto: Produto) => {
    setCarrinho([...carrinho, produto]);
  };

  const removerDoCarrinho = (produtoId: number) => {
    setCarrinho(carrinho.filter((item) => item.id !== produtoId));
  };

  const calcularTotal = () => {
    return carrinho.reduce((total, item) => total + item.preco, 0).toFixed(2);
  };

  const finalizarCompra = () => {
    alert(`Pedido Reservado Total: R$ ${calcularTotal()} \nPagar na loja física \nInformar ID do pedido\nID:5647`);
    setCarrinho([]);
  };

  const manipularLogout = () => {
    localStorage.removeItem('user');
    router.push('/Login');
  };

  return (
    <div className="dashboard-container">
      <button className="logout-button" onClick={manipularLogout}>
        Logout
      </button>

      <div className="info-container">
        <fieldset>
          <legend><h1>Suas Informações</h1></legend>
          {editando ? (
            <form onSubmit={manipularSalvar}>
              <div>
                <label>Nome:</label>
                <input
                  type="text"
                  name="nome"
                  value={usuario.nome}
                  onChange={manipularMudanca}
                  required
                />
              </div>
              <div>
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  value={usuario.email}
                  onChange={manipularMudanca}
                  required
                />
              </div>
              <div>
                <label>Senha:</label>
                <input
                  type="password"
                  name="senha"
                  value={usuario.senha}
                  onChange={manipularMudanca}
                  required
                />
              </div>
              <div>
                <label>Nome do Pet:</label>
                <input
                  type="text"
                  name="nomePet"
                  value={usuario.nomePet}
                  onChange={manipularMudanca}
                  required
                />
              </div>
              <div>
                <label>Espécie do Pet:</label>
                <input
                  type="text"
                  name="especiePet"
                  value={usuario.especiePet}
                  onChange={manipularMudanca}
                  required
                />
              </div>
              <button type="submit">Salvar</button>
              <button type="button" onClick={() => setEditando(false)}>Cancelar</button>
            </form>
          ) : (
            <div>
              <p><strong>Nome:</strong> {usuario.nome}</p>
              <p><strong>Email:</strong> {usuario.email}</p>
              <p><strong>Senha:</strong> {usuario.senha.replace(/./g, '*')}</p>
              <p><strong>Nome do Pet:</strong> {usuario.nomePet}</p>
              <p><strong>Espécie do Pet:</strong> {usuario.especiePet}</p>
              <button onClick={manipularEdicao}>Editar</button>
            </div>
          )}
        </fieldset>
      </div>

      <div className="servicos-container">
        <fieldset>
          <legend><h1>Serviços Disponíveis</h1></legend>
          <div className="grid-container">
            {servicos.length > 0 ? (
              servicos.map((servico, index) => (
                <div key={index} className="grid-item">
                  <p><strong>Nome:</strong> {servico.nome}</p>
                  <p><strong>Descrição:</strong> {servico.descricao}</p>
                  <p><strong>Preço:</strong> R$ {servico.preco.toFixed(2)}</p>
                  <p><strong>Categoria:</strong> {servico.categoria}</p>
                  <p><strong>Duração:</strong> {servico.duracao}</p>
                </div>
              ))
            ) : (
              <p>Nenhum serviço disponível</p>
            )}
          </div>
        </fieldset>
      </div>

      <div className="produtos-container">
        <fieldset>
          <legend><h1>Produtos</h1></legend>
          <div className="grid-container">
            {produtos.length > 0 ? (
              produtos.map((produto) => (
                <div key={produto.id} className="grid-item">
                  <p><strong>Nome:</strong> {produto.nome}</p>
                  <p><strong>Preço:</strong> R$ {produto.preco.toFixed(2)}</p>
                  <button onClick={() => adicionarAoCarrinho(produto)}>Adicionar ao Carrinho</button>
                  <button onClick={() => removerDoCarrinho(produto.id)}>Remover</button>
                </div>
              ))
            ) : (
              <p>Nenhum produto disponível</p>
            )}
          </div>
        </fieldset>
      </div>

      <div className="carrinho-container">
        <fieldset>
          <legend><h1>Carrinho de Compras</h1></legend>
          {carrinho.length > 0 ? (
            <div>
              {carrinho.map((item, index) => (
                <div key={index}>
                  <p><strong>{item.nome}</strong> - R$ {item.preco.toFixed(2)}</p>
                </div>
              ))}
              <p><strong>Total:</strong> R$ {calcularTotal()}</p>
              <button onClick={finalizarCompra}>Comprar</button>
            </div>
          ) : (
            <p>Carrinho vazio</p>
          )}
        </fieldset>
      </div>
    </div>
  );
};

export default Dashboard;
