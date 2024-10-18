'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import './Dashboard.css';

interface Produto {
  id: number;
  nome: string;
  preco: number;
}

interface Servico {
  id: number;
  nome: string;
  preco: number;
}

const Dashboard = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    nomePet: '',
    especiePet: '',
    isLogged: true
  });
  const [editando, setEditando] = useState(false);
  const [servicos, setServicos] = useState<Servico[]>([]);
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [carrinho, setCarrinho] = useState<Produto[]>([]);
  const [servicoSelecionado, setServicoSelecionado] = useState<Servico | null>(null);
  const [dataHora, setDataHora] = useState<string>('');
  const [servicoConfirmado, setServicoConfirmado] = useState<{ nome: string; dataHora: string } | null>(null);

  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const storedServicos = localStorage.getItem('servicos');
    const storedCarrinho = sessionStorage.getItem('carrinho');

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      router.push('/Login');
    }

    if (storedServicos) {
      setServicos(JSON.parse(storedServicos));
    }

    if (storedCarrinho) {
      setCarrinho(JSON.parse(storedCarrinho));
    }
  }, [router]);

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const res = await fetch('/api/products.json');
        const data = await res.json();
        setProdutos(data);
      } catch (error) {
        console.error('Erro ao buscar os produtos:', error);
      }
    };
    fetchProdutos();
  }, []);

  useEffect(() => {
    sessionStorage.setItem('carrinho', JSON.stringify(carrinho));
  }, [carrinho]);

  const lidarEdicao = () => {
    setEditando(true);
  };

  const lidarMudancas = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const lidarMudancaServico = (e: React.ChangeEvent<HTMLInputElement>) => {
    const servico = servicos.find((s) => s.id === Number(e.target.value));
    setServicoSelecionado(servico || null);
  };

  const lidarMudancaDataHora = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDataHora(e.target.value);
  };

  const salvar = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('user', JSON.stringify(user));
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

  const confirmarServico = () => {
      alert("Serviço Marcado com SUCESSO!");
  };


  const logout = () => {
    router.push('/Login');
  };

  return (
    <div className="dashboard-container">
      <button className="logout-button" onClick={logout}>
        Logout
      </button>

      <div className="info-container">
        <fieldset>
          <legend><h1>Suas Informações</h1></legend>
          {editando ? (
            <form onSubmit={salvar}>
              <div>
                <label>Nome:</label>
                <input
                  type="text"
                  name="name"
                  value={user.name}
                  onChange={lidarMudancas}
                  required
                />
              </div>
              <div>
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  value={user.email}
                  onChange={lidarMudancas}
                  required
                />
              </div>
              <div>
                <label>Senha:</label>
                <input
                  type="password"
                  name="password"
                  value={user.password}
                  onChange={lidarMudancas}
                  required
                />
              </div>
              <div>
                <label>Nome do Pet:</label>
                <input
                  type="text"
                  name="nomePet"
                  value={user.nomePet}
                  onChange={lidarMudancas}
                  required
                />
              </div>
              <div>
                <label>Espécie do Pet:</label>
                <div>
                  <label>
                    <input
                      type="radio"
                      name="especiePet"
                      value="Cachorro"
                      checked={user.especiePet === 'Cachorro'}
                      onChange={lidarMudancas}
                    />
                    Cachorro
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="especiePet"
                      value="Gato"
                      checked={user.especiePet === 'Gato'}
                      onChange={lidarMudancas}
                    />
                    Gato
                  </label>
                </div>
              </div>
              <button type="submit">Salvar</button>
              <button type="button" onClick={() => setEditando(false)}>Cancelar</button>
            </form>
          ) : (
            <div>
              <p><strong>Nome:</strong> {user.name}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Senha:</strong> {user.password.replace(/./g, '*')}</p>
              <p><strong>Nome do Pet:</strong> {user.nomePet}</p>
              <p><strong>Espécie do Pet:</strong> {user.especiePet}</p>
              <button onClick={lidarEdicao}>Editar</button>
            </div>
          )}
        </fieldset>
      </div>

      <div className="servicos-container">
        <fieldset>
          <legend><h1>Serviços Disponíveis</h1></legend>
          <div className="grid-container">
            {servicos.length > 0 ? (
              servicos.map((servico) => (
                <div key={servico.id} className="grid-item">
                  <label>
                    <input
                      type="radio"
                      name="servico"
                      value={servico.id}
                      checked={servicoSelecionado?.id === servico.id}
                      onChange={lidarMudancaServico}
                    />
                    <strong>Nome:</strong> {servico.nome} | <strong>Preço:</strong> R$ {servico.preco.toFixed(2)}
                  </label>
                </div>
              ))
            ) : (
              <p>Nenhum serviço disponível</p>
            )}
          </div>
          <div>
            <label htmlFor="dataHora">Selecione a data e hora:</label>
            <input
              type="datetime-local"
              id="dataHora"
              value={dataHora}
              onChange={lidarMudancaDataHora}
              min={new Date().toISOString().slice(0, 16)}
              required
            />
          </div>
          <button onClick={confirmarServico}>Marcar Serviço</button>
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
