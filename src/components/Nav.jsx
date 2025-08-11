import {Link} from 'react-router-dom';
export function Nav() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/about">Sobre mi</Link></li>
        <li><Link to="/portfolio">Portafolio</Link></li>
        <li><Link to="/catalogo">Catálogo</Link></li>
       {/* <li><Link to="/shop">Tienda</Link></li> 
        <li><Link to="/cart">Carrito</Link></li> se implementará en un futuro*/}
      </ul>
    </nav>
  );
}
