import { Header } from '../components/Header'
import {Nav} from '../components/Nav'
import { Outlet } from 'react-router-dom';

//Pagina creada para el layout general de la aplicacion tenemos la cabecera, la navegacion y el contenido principal
export function Layout() {
  return (
    <>
      <Header />
      <Nav />
      <Outlet />
    </>
  );
}
