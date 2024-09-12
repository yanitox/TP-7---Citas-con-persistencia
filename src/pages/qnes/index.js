
import styles from '../../styles/Home.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
export default function qnes() {
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
      <h1 className={styles.h1}>Quienes Somos</h1>
        <p className={styles.p}>
          En Reserva de Citas para Perros, somos un equipo apasionado de amantes de los animales, dedicados a brindar el mejor cuidado y atención a nuestros amigos de cuatro patas. Nuestro objetivo es facilitar el proceso de reserva de citas para que los dueños de mascotas puedan acceder a servicios veterinarios de manera rápida y eficiente. </p>
          <p className={styles.p}>
           Nuestra plataforma ofrece una forma sencilla de agendar citas para consultas veterinarias, grooming, y otros servicios esenciales para el bienestar de tu perro. Con una interfaz intuitiva y fácil de usar, puedes programar citas desde la comodidad de tu hogar, asegurando que tu mascota reciba la atención que necesita sin complicaciones.</p>
           <p className={styles.p}> Contamos con un equipo de profesionales experimentados y comprometidos con la salud y el bienestar de los animales. Trabajamos en estrecha colaboración con clínicas veterinarias y groomers certificados para garantizar que cada visita sea una experiencia positiva tanto para las mascotas como para sus dueños.
                  En Reserva de Citas para Cachorros, entendemos que cada mascota es única y especial. Nos esforzamos por ofrecer un servicio personalizado y adaptado a las necesidades individuales de cada cliente, asegurando la máxima satisfacción y tranquilidad.
          Únete a nuestra comunidad de dueños de mascotas que confían en nosotros para el cuidado de sus queridos compañeros. Estamos aquí para ayudarte a mantener a tu perro feliz y saludable. </p>
          <p className={styles.p}> Gracias por elegirnos como tu plataforma de confianza para la reserva de citas. Estamos comprometidos a brindarte el mejor servicio posible.
        </p>
        </div>
      </div>
    
    </div>
    
    
  );
};

