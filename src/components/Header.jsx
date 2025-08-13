import '../styles/Header.css';
import {Link} from 'react-router-dom';


export function Header({ toggleMenu }) {


  return (
    <header>
      <input onChange={toggleMenu} type="checkbox" name="menu-toggle" id="menu-toggle" />

      <label htmlFor="menu-toggle">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </label>

      <Link to="/">
        <img src='/images/logo.webp' alt="Logo" />
      </Link>

 
    </header>
  );
}
