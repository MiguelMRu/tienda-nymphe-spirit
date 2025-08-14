
import '../styles/Nav.css'; 
import { Link, useNavigate } from 'react-router-dom';

export function Nav({ isOpen, toggleMenu }) {

  const navClass = isOpen ? 'open' : 'closed';
  const navigate = useNavigate();

  const handleNavigate = (path, sectionId = null) => {
    toggleMenu();
    navigate(path);

    if (sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className={navClass}>
      <button className="close-button" onClick={toggleMenu}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>   
      </button>

      <ul>
        <li><Link to="/" onClick={toggleMenu}>Inicio</Link></li>
        <li><Link to="/#about" onClick={toggleMenu}>Sobre mi</Link></li>
        <li><Link to="/portfolio" onClick={toggleMenu}>Portafolio</Link></li>
        <li><Link to="/catalogo" onClick={toggleMenu}>Catálogo</Link></li>
        <li><Link to="/shop" onClick={toggleMenu}>Tienda</Link></li>
      </ul>
    </nav>
  );
}
