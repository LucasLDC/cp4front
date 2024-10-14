// import styles from './Login.module.css';
// import Link from 'next/link';

// const Login = () => {
//     return (
//         <section className={styles.section}>
//             <form id={styles.LOGIN}>
//                 <fieldset className={styles.fieldset}>
//                     <legend>Login</legend>
                    
//                     <label htmlFor="txtEmail">
//                         <h4> Email: </h4>
//                         <input type="email" placeholder="Digite o Email" />
//                     </label>
//                     <br />

//                     <label htmlFor="txtSenha">
//                         <h4> SENHA: </h4>
//                         <input type='password' placeholder="Digite a Senha" />
//                     </label>
//                     <br />

//                     <Link href="/Cadastro">
//                         <h1 className={styles.createAccount}>Criar um cadastro</h1>
//                     </Link>
//                     <Link href="/Consultas_Veterinarias">
//                         <button type="button" className={styles.button}>Entrar</button>
//                     </Link>
//                 </fieldset>
//             </form>
//         </section>
//     );
// };

// export default Login;


"use client"
import { useState } from 'react';
import styles from './Login.module.css';
import Link from 'next/link';

const Login = () => {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");

    const handleLogin = () => {
        // Obtendo dados do Web Storage
        const storedData = JSON.parse(localStorage.getItem("cadastroData"));

        // Verificando se as informações do usuário estão corretas
        if (storedData) {
            if (storedData.email === email && storedData.senha === senha) {
                // Login bem-sucedido
                // Você pode redirecionar para outra página aqui, por exemplo:
                window.location.href = "/Consultas_Veterinarias";
            } else {
                // Se o email ou a senha estiverem incorretos
                setError("Email ou senha incorretos.");
            }
        } else {
            setError("Nenhum usuário encontrado.");
        }
    };

    return (
        <section className={styles.section}>
            <form id={styles.LOGIN} onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
                <fieldset className={styles.fieldset}>
                    <legend>Login</legend>
                    
                    <label htmlFor="txtEmail">
                        <h4>Email:</h4>
                        <input 
                            type="email" 
                            placeholder="Digite o Email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                        />
                    </label>
                    <br />

                    <label htmlFor="txtSenha">
                        <h4>SENHA:</h4>
                        <input 
                            type='password' 
                            placeholder="Digite a Senha" 
                            value={senha} 
                            onChange={(e) => setSenha(e.target.value)} 
                        />
                    </label>
                    <br />

                    {error && <p style={{ color: 'red' }}>{error}</p>} {/* Mensagem de erro */}

                    <Link href="/Cadastro">
                        <h1 className={styles.createAccount}>Cadastre-se</h1>
                    </Link>
                    <button type="submit" className={styles.button}>Entrar</button>
                </fieldset>
            </form>
        </section>
    );
};

export default Login;
