'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import './Dashboard.css';

interface Produto {
  id: number;
  nome: string;
  preco: number;
  imagem?: string;
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
  const [editing, setEditing] = useState(false);
  const [servicos, setServicos] = useState([]);
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const storedServicos = localStorage.getItem('servicos');

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      router.push('/Login');
    }

    if (storedServicos) {
      setServicos(JSON.parse(storedServicos));
    }
  }, [router]);


  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const res = await fetch('/api/products');
        const data = await res.json();
        setProdutos(data);
      } catch (error) {
        console.error("Erro ao buscar os produtos: ", error);
      }
    };
    fetchProdutos();
  }, []);


  const handleEdit = () => {
    setEditing(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('user', JSON.stringify(user));
    setEditing(false);
  };

  return (
    <div className="dashboard-container">
      <div className="info-container">
        <fieldset>
          <legend><h1>Suas Informações</h1></legend>
          {editing ? (
            <form onSubmit={handleSave}>
              <div>
                <label>Nome:</label>
                <input
                  type="text"
                  name="name"
                  value={user.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>Senha:</label>
                <input
                  type="password"
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>Nome do Pet:</label>
                <input
                  type="text"
                  name="nomePet"
                  value={user.nomePet}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>Espécie do Pet:</label>
                <input
                  type="text"
                  name="especiePet"
                  value={user.especiePet}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit">Salvar</button>
              <button type="button" onClick={() => setEditing(false)}>Cancelar</button>
            </form>
          ) : (
            <div>
              <p><strong>Nome:</strong> {user.name}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Senha:</strong> {user.password.replace(/./g, '*')}</p>
              <p><strong>Nome do Pet:</strong> {user.nomePet}</p>
              <p><strong>Espécie do Pet:</strong> {user.especiePet}</p>
              <button onClick={handleEdit}>Editar</button>
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
                  <p><strong>Preço:</strong> R$ {servico.preco}</p>
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
                  <p><strong>Preço:</strong> R$ {produto.preco}</p>
                </div>
              ))
            ) : (
              <p>Nenhum produto disponível</p>
            )}
          </div>
        </fieldset>
      </div>
    </div>
  );
};

export default Dashboard;
