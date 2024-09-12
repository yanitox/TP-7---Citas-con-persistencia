
import styles from './Subtitulo.module.css';
const Subtitulo = ({ texto }) => {
  return <h2 className={styles.h2}>{texto}</h2>;
}

export default Subtitulo;