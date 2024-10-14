import styles from './Header.module.css';
import Link from 'next/link';

const Header = () => {
    return (
        <main className={styles.main}>
            <header className={styles.header}>
                <h1 className={styles.PetShop}>Petsu Shop</h1>
                <nav>
                    <ul className={styles.navUl}>
                        <li className={styles.navLi}><Link className={styles.navLink} href="/">Home</Link></li>
                        <li className={styles.navLi}><Link className={styles.navLink} href="/Adicione_Servico">Adicione Serviço</Link></li>
                        <li className={styles.navLi}><Link className={styles.navLink} href="/Login">Login</Link></li>
                        <li className={styles.navLi}><Link className={styles.navLink} href="/Adicione_Servicos">adicione</Link></li>
                    </ul>
                </nav>
            </header>
        </main>
    );
};

export default Header;
