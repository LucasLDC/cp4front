'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link'; 
import './Dashboard.css';

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
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      router.push('/Login');
    }
  }, [router]);

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
    <div>
      <h1>Seja Bem Vindo(a) {user.name}</h1>
      <h1>O que você gostaria de fazer para a(o) {user.nomePet}?</h1>
      <fieldset>
        <legend> <h1>Suas Informações</h1></legend>
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
      <Link href='/Servicos'>
        <img src='/img/cachorroTratamento.jpg'/>
      </Link>
    </div>
  );
};

export default Dashboard;
