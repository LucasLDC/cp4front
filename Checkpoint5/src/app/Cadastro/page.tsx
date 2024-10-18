'use client';  
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './Cadastro.module.css';

const Cadastro = () => {
  const [name, setName] = useState('');  
  const [email, setEmail] = useState('');  
  const [password, setPassword] = useState('');  
  const [nomePet, setNomePet] = useState('');  
  const [especiePet, setEspeciePet] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();  

  const mudarVisibilidadeSenha = () => {
    setShowPassword(!showPassword);
  };

  const lidarCadastro = (e: React.FormEvent) => {
    e.preventDefault(); 

    const user = { 
      name,
      email, 
      password,
      nomePet,
      especiePet,
    };
    
    localStorage.setItem('user', JSON.stringify(user));

    router.push('/Login');  
  };

  return (
    <div className={styles.container}>  
      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>Informações de Cadastro</legend>
        <form onSubmit={lidarCadastro}>

          <div>
            <label className={styles.texto}>Nome:</label>
            <input className={styles.input} type="text" placeholder='Digite seu Nome' value={name} onChange={(e) => setName(e.target.value)} required />
          </div>

          <div>
            <label className={styles.texto}>Email:</label>
            <input className={styles.input} type="email" placeholder='Digite seu email' value={email} onChange={(e) => setEmail(e.target.value)} required/>
          </div>
          
          <div>
            <label className={styles.texto}>Senha:</label>
            <div className={styles.passwordContainer}>
              <input className={styles.input} type={showPassword ? 'text' : 'password'} placeholder='Digite sua senha' value={password} onChange={(e) => setPassword(e.target.value)} required/>
              <button type="button" onClick={mudarVisibilidadeSenha} className={styles.toggleButton}>
                {showPassword ? '👁️' : '🙈'}
              </button>
            </div>
          </div>

          <div>
            <label className={styles.texto}>Nome do Pet:</label>
            <input  className={styles.input} type="text" placeholder='Digite o nome do seu PET' value={nomePet} onChange={(e) => setNomePet(e.target.value)} required/>
          </div>

          <div>
            <label>Espécie do Pet:</label>
            <div>
              <input type="radio" id="dog" name="petSpecies" value="Cachorro" onChange={(e) => setEspeciePet(e.target.value)} required/>
              <label htmlFor="dog">Cachorro</label>
            </div>
            <div>
              <input type="radio" id="cat" name="petSpecies" value="Gato" onChange={(e) => setEspeciePet(e.target.value)} required/>
              <label htmlFor="cat">Gato</label>
            </div>
          </div>
          <button className={styles.button} type="submit">Cadastrar</button>
        </form>
      </fieldset>
    </div>
  );
};

export default Cadastro;
