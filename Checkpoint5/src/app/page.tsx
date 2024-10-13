import styles from './PaginaInicial/PaginaInicial.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgANDtext}>
        <img src='/img/Doguinho.png' alt="Doguinho" className={styles.imagemDog} />
        <div className={styles.titulo}>
          <h1>Seja bem-vindo ao Petsu Shop!</h1>
          <button className={styles.button}>Marcar cuidados com o cachorro</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
