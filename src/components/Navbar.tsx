
import logo from "../assets/logo.jpg";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">

      <div className="navbar-logo">
        <img src={logo} alt="MS Dental" />
        <span>MS Dental</span>
      </div>

      <ul className="navbar-menu">
        <li>Inicio</li>
        <li>Servicios</li>
        <li>Nosotros</li>
        <li>Contacto</li>
      </ul>

      <button className="navbar-button">
        Reservar turno
      </button>

    </nav>
  );
}