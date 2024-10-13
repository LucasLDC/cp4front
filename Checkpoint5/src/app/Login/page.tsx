import styles from './Login.module.css';
import Link from 'next/link';

const Login = () => {
    return (
        <section className={styles.section}>
            <form id={styles.LOGIN}>
                <fieldset className={styles.fieldset}>
                    <legend>Login</legend>
                    
                    <label htmlFor="txtEmail">
                        <h4> Email: </h4>
                        <input type="email" placeholder="Digite o Email" />
                    </label>
                    <br />

                    <label htmlFor="txtSenha">
                        <h4> SENHA: </h4>
                        <input type='password' placeholder="Digite a Senha" />
                    </label>
                    <br />

                    <Link href="/Cadastro">
                        <h1 className={styles.createAccount}>Criar um cadastro</h1>
                    </Link>
                    <Link href="/Consultas_Veterinarias">
                        <button type="button" className={styles.button}>Entrar</button>
                    </Link>
                </fieldset>
            </form>
        </section>
    );
};

export default Login;
