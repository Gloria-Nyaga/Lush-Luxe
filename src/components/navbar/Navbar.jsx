import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo-text">
          <NavLink to="/" className="logo-link">LushLiving</NavLink>
        </div>

        <div className="navbar-links">
          <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>HOME</NavLink>
          <NavLink to="/products/ProductData" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>PRODUCTS</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>ABOUT</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>CONTACT</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
