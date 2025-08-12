import {Link} from 'react-router-dom';
import '../styles/Nav.css'; 

export function Nav({ isOpen, toggleMenu }) {

  const navClass = isOpen ? 'open' : 'closed';



  return (
    <nav className={navClass}>
      <ul>
        <li><Link to="/" onClick={toggleMenu}>Inicio</Link></li>
        <li><Link to="/about" onClick={toggleMenu}>Sobre mi</Link></li>
        <li><Link to="/portfolio" onClick={toggleMenu}>Portafolio</Link></li>
        <li><Link to="/catalogo" onClick={toggleMenu}>Catálogo</Link></li>
       {/* <li><Link to="/shop">Tienda</Link></li> 
        <li><Link to="/cart">Carrito</Link></li> se implementará en un futuro*/}
      </ul>
    </nav>
  );
}
