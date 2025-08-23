import '../styles/Nav.css'; 
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { menuItems, leftItemVariants, rightItemVariants } from './Nav-links';

export function Nav({ isOpen, toggleMenu }) {

  // Variantes para el contenedor del navegador
  const navVariants = {
    open: {
      opacity: 1,
      visibility: 'visible',
      backdropFilter: 'brightness(0.5) blur(2px)',
      transition: {
        duration: 0.5
      }
    },
    closed: {
      opacity: 0,
      visibility: 'hidden',
      backdropFilter: 'brightness(1) blur(0px)',
      transition: {
        duration: 0.5
      }
    }
  };



  return (
    <AnimatePresence>
      {isOpen && (
        <motion.nav
          initial="closed"
          animate="open"
          exit="closed"
          variants={navVariants}
          className="open"
          onClick={toggleMenu}
        >
          <button className="close-button" onClick={toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>   
          </button>

          <ul>
            {menuItems.map((item, index) => (
              <motion.li
                key={item.to}
                variants={index % 2 === 0 ? leftItemVariants : rightItemVariants}
              >
                <Link to={item.to} onClick={toggleMenu}>{item.text}</Link>
              </motion.li>
            ))}
          </ul>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}