import { Header } from './components/Header'
import { Nav } from './components/Nav'
import { Outlet } from 'react-router-dom';
import { useState } from 'react';

//Pagina creada para el layout general de la aplicacion tenemos la cabecera, la navegacion y el contenido principal

function App() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


//En esta sección se definen las rutas de la aplicación
  return (
      <>
        <Header toggleMenu={toggleMenu} />
        <Nav isOpen={isMenuOpen} toggleMenu={toggleMenu} />
        <Outlet />
      </>
    
  )
}

export default App
