import styles from './PaginaInicial/PaginaInicial.module.css';
import Link from 'next/link'; 

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgANDtext}>
        <img src='/img/Doguinho.png' alt="Doguinho" className={styles.imagemDog} />
        <div className={styles.titulo}>
          <h1>Seja bem-vindo ao Petsu Shop</h1>
          <Link href="/Login">
            <button className={styles.button}>Marcar cuidados com os seus PETS</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
