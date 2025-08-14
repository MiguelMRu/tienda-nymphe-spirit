import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/Home.css';


export function Home() {
  const location = useLocation();

  useEffect(() => {
    // Verificar si hay un hash en la URL
    if (location.hash) {
      const sectionId = location.hash.substring(1); // Remover el #
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [location]);

  return (
    <main>
      {/* Esta parte tiene que tener un tamño fijo de la imagen */}
      <section className="home">
        <picture>
          <source media="(max-width: 600px)" srcSet="/images/fondo_home_movil.webp" />
          <source media="(min-width: 601px)" srcSet="/images/fondo_home_escritorio.PNG" />
          <img src="/images/fondo_home_movil.webp" alt="Fondo de la página de inicio de Nymphe Spirit" />
        </picture>
      </section>

      {/* Esta se tiene que adaptar a lo que falta */}
      <section className="about" id="about">
          <article className="about-header">
            <img src="/images/autoretrato.webp" alt="Autoretrato de Alba Tejedor, diseñadora gráfica, ilustradora, artista digital y dueña de la marca Nymphe Spirit"  />
          </article>

        <article className="about-text">
          <div className='about-info'>
            <h1>Sobre mí</h1>
            <div className='about-description'>
              <img src="/images/marco_sobre_mi.webp" alt="" />
              <p>Mi nombre es Alba Tejedor, nací el día del ducentésimo quincuagésimo aniversario de la Independencia de los Estados Unidos de América, y estudié Bellas Artes en la Universidad Politécnica de Valencia. No recuerdo un día de mi vida sin dibujar, imaginar o diseñar, esta es mi particular interpretación de las cosas que me rodean, las que adoro y me inspiran. Nymphe Spirit es el nombre de un proyecto reciente que, en realidad, llevo gestando toda mi vida y ahora coge color.</p>
            </div>
          </div>
        </article>
      </section>

    </main>
  );
}