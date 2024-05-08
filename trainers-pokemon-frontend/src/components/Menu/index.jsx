// rafce
import './index.css';
import logo from '../../assets/img/logo.png';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <nav>
      <div>
        <img src={logo} alt="logo de trainers" className="logo-img" />
      </div>
      <ul className="nav-items">
        <Link to="/" className="nav-a">
          Inicio
        </Link>
        <Link to="/new-trainer" className="nav-a">
          Registro entrenador
        </Link>
        <Link to="/about" className="nav-a">
          Acerca de nosotros
        </Link>
      </ul>
    </nav>
  );
};

export default Menu;
