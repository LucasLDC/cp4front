import styles from './Error404/Error404.module.css';
import Link from 'next/link'; 

export default function NotFound() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>404</h1>
            <p className={styles.message}>Oops! Uma pena não ser isso que você procura :( </p>
            <Link href="/Login">
                <button className={styles.button} > Voltar para a página inicial</button>
            </Link>
        </div>
    );
}