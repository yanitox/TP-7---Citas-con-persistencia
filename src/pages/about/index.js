import styles from '../about/index.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Citas from '../../components/Citas/Citas.js';
import Form from '../../components/Form/Form.js';
import Subtitulo from '../../components/Subtitulo/Subtitulo.js';
import Titulo from '../../components/Titulo/Titulo.js';
import { useState, useEffect } from 'react';
import Link from 'next/link';



export default function Home() {
  const [citas, setCitas] = useState([
  
  ]);

  return (
    <div className={styles.bodyp}>
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
      <Titulo />
      <div className="container">
        <div className="one-half column">
          <Subtitulo texto="CREAR MI CITA" />
          <Form setCitas={setCitas} citas={citas} />
        </div>
        <div className="one-half column">
          <Subtitulo texto="ADMINISTRA TUS CITAS" />
          <Citas setCitas={setCitas} citas={citas} />
        </div>
      </div>
    </div>
  );
}
