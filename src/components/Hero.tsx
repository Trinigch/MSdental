import logo from "../assets/Logo.jpg";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">

      <img
        src={logo}
        alt="MS Dental"
        className="hero-logo"
      />

      <h1 className="hero-title">
        Recuperá tu sonrisa
      </h1>

      <p className="hero-text">
        En MS Dental combinamos tecnología odontológica moderna
        con atención profesional para brindarte tratamientos
        seguros y personalizados.
      </p>

      <button className="hero-button">
        Agendar consulta
      </button>

    </section>
  );
}