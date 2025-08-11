import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Catalogo } from './pages/Catalogo'
import { NotFound } from './pages/NotFound'
import { Cart } from './pages/Cart'
import { Layout } from './pages/Layout'
import { Portfolio } from './pages/Portfolio'
import { Shop } from './pages/Shop'
import { About } from './pages/About'

function App() {

//En esta sección se definen las rutas de la aplicación
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/shop" element={<Shop />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>

    
  )
}

export default App
