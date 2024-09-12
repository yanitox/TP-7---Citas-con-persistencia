import React from 'react';
import styles from './Cita.module.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';

const Cita = ({ mascota, dueno, fecha, hora, sintomas, ID, setCitas, citas }) => {
  const eliminarCita = () => {
    if (window.confirm("¿Desea eliminar la cita?")) {
      const nuevasCitas = citas.filter(cita => cita.ID !== ID);
      setCitas(nuevasCitas);
      localStorage.setItem('citas', JSON.stringify(nuevasCitas)); // Actualiza el localStorage
    }
  }

  return (
    <div className={styles.Cita}> 
      <p>Mascota: <span>{mascota}</span></p>
      <p className={styles.p}>Dueño: <span className={styles.span}>{dueno}</span> </p>
      <p className={styles.p}>Fecha: <span className={styles.span}>{fecha}</span> </p>
      <p className={styles.p}>Hora: <span className={styles.span}>{hora}</span> </p>
      <p className={styles.p}>Síntomas: <span className={styles.span}>{sintomas}</span> </p>
      <button className="button eliminar u-full-width" onClick={eliminarCita}>Eliminar ×</button>
    </div>
  );
}

export default Cita;
