// rafce
import './index.css';
import logo from '../../assets/img/logo.png';
// import { a } from 'react-router-dom';

const Menu = () => {
  return (
    <nav>
      <div>
        <img src={logo} alt="logo de trainers" className="logo-img" />
      </div>
      <ul className="nav-items">
        <a href="/" className="nav-a">
          Inicio
        </a>
        <a href="/new-trainer" className="nav-a">
          Registro entrenador
        </a>
        <a href="/about" className="nav-a">
          Acerca de nosotros
        </a>
      </ul>
    </nav>
  );
};

export default Menu;
