import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Home } from '../pages/Home'
import { Catalogo } from '../pages/Catalogo'
import { NotFound } from '../pages/NotFound'
import { Cart } from '../pages/Cart'
import { Portfolio } from '../pages/Portfolio'
import { Shop } from '../pages/Shop'
import App from '../App.jsx'

//Componente que define las rutas de la aplicación

export function AppRouter() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route index element={<Home />} />
                <Route path="/catalogo" element={<Catalogo />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/shop" element={<Shop />} />
            </Route>
                <Route path="*" element={<NotFound />} />
        </Routes>
  </BrowserRouter>
)}