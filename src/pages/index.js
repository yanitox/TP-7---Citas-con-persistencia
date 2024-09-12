import styles from '../styles/Home.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
export default function About() {
  return (
    <div className={styles.html}>
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/qnes">Quienes somos</Link>
        </li>
        <li>
          <Link href="/about">citas</Link>
        </li>
        <li>
          <Link href="/contacto">Ayuda</Link>
        </li>
      </ul>
      <div className={styles.welcome}>
        <h1>Bienvenidos a la Reserva de Citas para Perros</h1>
        <p>La mejor manera de cuidar a tus amigos de cuatro patas.</p>
        <img src='/dante.png'></img>
      </div>
    </nav>
    </div>
    
    
  );
};

