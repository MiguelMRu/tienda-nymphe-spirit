
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
      <ul>
        <li><Link to="/" onClick={toggleMenu}>Inicio</Link></li>
        <li><Link to="/#about" onClick={toggleMenu}>Sobre mi</Link></li>
        <li><Link to="/portfolio" onClick={toggleMenu}>Portafolio</Link></li>
        <li><Link to="/catalogo" onClick={toggleMenu}>Catálogo</Link></li>
        <li><Link to="/shop" onClick={toggleMenu}>Tienda</Link></li>
        <li><Link to="/cart" onClick={toggleMenu}>Carrito</Link></li> {/* se implementará en un futuro*/}
      </ul>
    </nav>
  );
}
