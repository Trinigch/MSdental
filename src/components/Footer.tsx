import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-column">
          <h3>MS Dental</h3>
          <p>
            Clínica odontológica especializada en salud
            y estética dental en Buenos Aires.
          </p>
        </div>

        <div className="footer-column">
          <h4>Contacto</h4>
          <p>Buenos Aires, Argentina</p>
          <p>+54 11 0000 0000</p>
          <p>contacto@msdental.com</p>
        </div>

        <div className="footer-column">
          <h4>Horarios</h4>
          <p>Lunes a Viernes: 9 a 19 hs</p>
          <p>Sábados: 9 a 13 hs</p>
        </div>

      </div>

      <p className="footer-copy">
        © 2026 MS Dental. Todos los derechos reservados.
      </p>

    </footer>
  );
}