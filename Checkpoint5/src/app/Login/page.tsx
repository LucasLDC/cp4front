"use client"
import { useState } from 'react';
import styles from './Login.module.css';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; 

const Login = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [error, setError] = useState('');
    const [MostrarSenha, setMostrarSenha] = useState(false); 
    const router = useRouter();

    const mudarVisibilidadeSenha = () => {
        setMostrarSenha(!MostrarSenha);
    };

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault(); 

        if (email === 'admin@email.com' && senha === 'admin123') {
            router.push('/Adicione_Servicos');
            return;
        }

        const user = localStorage.getItem('user');
        if (user) {
            const analiseUser = JSON.parse(user);

            if (analiseUser.email === email && analiseUser.password === senha) {
                router.push('/Dashboard');
            } else {
                setError('Email ou senha incorretos');
            }
            
        } else {
            setError('Usuário não encontrado. Faça o cadastro primeiro.'); 
        }
    }

    return (
        <section className={styles.section}>
            <form id={styles.LOGIN} onSubmit={handleLogin}> 
                <fieldset className={styles.fieldset}>
                    <legend>Login</legend>
                    
                    <label htmlFor="txtEmail">
                        <h4>Email:</h4>
                        <input 
                            type="email" 
                            placeholder="Digite o Email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                        required/>
                    </label>
                    <br />

                    <div>
                        <h4 className={styles.texto}>Senha:</h4>
                        <div className={styles.passwordContainer}>
                            <input 
                                className={styles.input} 
                                type={MostrarSenha ? 'text' : 'password'} 
                                placeholder='Digite sua senha' 
                                value={senha} 
                                onChange={(e) => setSenha(e.target.value)} 
                                required
                            />
                            <button 
                                type="button" 
                                onClick={mudarVisibilidadeSenha} 
                                className={styles.toggleButton}
                            >
                                {MostrarSenha ? '👁️' : '🙈'}
                            </button>
                        </div>
                    </div>

                    <br />

                    {error && <p style={{ color: 'red' }}>{error}</p>} 

                    <Link href="/Cadastro">
                        <h1 className={styles.criarConta}>Cadastre-se</h1>
                    </Link>
                    <button type="submit" className={styles.button}>Entrar</button>
                </fieldset>
            </form>
        </section>
    );
};

export default Login;