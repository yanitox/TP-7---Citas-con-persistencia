import styles from './Citas.module.css'; // Importar los estilos CSS Module

import Cita from '../Cita/Cita';

const Citas = ({ citas, setCitas }) => {
  return (
    <div className={styles.Citas}> {/* Aplicar la clase CSS utilizando styles.Citas */}
      {citas.map((cita, index) => (
        <Cita
          key={cita.ID} // Asegúrate de agregar una key única cuando haces un map en React
          setCitas={setCitas}
          citas={citas}
          ID={cita.ID}
          mascota={cita.mascota}
          dueno={cita.dueno}
          fecha={cita.fecha}
          hora={cita.hora}
          sintomas={cita.sintomas}
        />
      ))}
    </div>
  );
}

export default Citas;
