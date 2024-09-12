import React, { useEffect } from 'react';
import styles from './Form.module.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';

const Formulario = ({ setCitas, citas }) => {
  
  useEffect(() => {
    const citasGuardadas = JSON.parse(localStorage.getItem('citas')) || [];
    setCitas(citasGuardadas);
  }, [setCitas]);

  const enviarForm = (e) => {
    e.preventDefault();

    const mascota = document.getElementById('mascota').value.trim();
    const dueno = document.getElementById('dueno').value.trim();
    const fecha = document.getElementById('fecha').value.trim();
    const hora = document.getElementById('hora').value.trim();
    const sintomas = document.getElementById('sintomas').value.trim();

    if (!mascota || !dueno || !fecha || !hora || !sintomas) {
      alert('Completar todos los campos');
      return;
    }

    const citaExistente = citas.find(cita =>
      cita.mascota === mascota &&
      cita.fecha === fecha &&
      cita.hora === hora &&
      cita.dueno === dueno
    );

    if (citaExistente) {
      alert('Ya existe esa cita');
      return;
    }

    const ID = Date.now();
    const cita = {
      ID,
      mascota,
      dueno,
      fecha,
      hora,
      sintomas
    };

    if (window.confirm("¿Desea agregar la siguiente cita?")) {
      const nuevasCitas = [...citas, cita];
      setCitas(nuevasCitas);
      localStorage.setItem('citas', JSON.stringify(nuevasCitas));
    }
  };
  const eliminarCita = (ID) => {
    const citasActualizadas = citas.filter(cita => cita.ID !== ID);
    setCitas(citasActualizadas);
    localStorage.setItem('citas', JSON.stringify(citasActualizadas));
  };

  return (
    <form onSubmit={enviarForm} className={styles.Formulario}>
      <label className={styles.label}>Nombre Mascota</label>
      <input id="mascota" type="text" className="u-full-width" placeholder="Nombre Mascota" />

      <label className={styles.label}>Nombre Dueño</label>
      <input id="dueno" type="text" className="u-full-width" placeholder="Nombre dueño de la mascota" />

      <label className={styles.label}>Fecha</label>
      <input id="fecha" type="date" className="u-full-width" />

      <label className={styles.label}>Hora</label>
      <input id="hora" type="time" className="u-full-width"/>

      <label className={styles.label}>Sintomas</label>
      <textarea id="sintomas" className="u-full-width"></textarea>

      <button type="submit" className="button-primary" onClick={() => eliminarCita(citas.ID)}>Agregar Cita</button>
    </form>
  );
};

export default Formulario;

