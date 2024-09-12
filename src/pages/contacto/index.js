import styles from '../../styles/Home.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';

export default function Ayuda() {
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
      </nav>
      <div className={styles.welcome}>
        <div className={styles.ach}>
          <h1 className={styles.h1}>Ayuda</h1>
          <p className={styles.p}>
            Bienvenido a nuestra sección de ayuda. Estamos aquí para asistirte en cualquier duda o consulta que tengas sobre nuestros servicios. Por favor, completa el siguiente formulario y nos pondremos en contacto contigo a la brevedad.
          </p>

          <form className={styles.form} method="POST">
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" />

            <label htmlFor="email">Correo Electrónico:</label>
            <input type="email" id="email" name="email" />

            <label htmlFor="mensaje">Mensaje:</label>
            <textarea id="mensaje" name="mensaje" rows="4"></textarea>

            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
}
