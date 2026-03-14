
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import "./Home.css";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <main className="home">

        {/* SERVICIOS */}
        <section className="services">
          <h2>Nuestros servicios</h2>

          <div className="services-grid">

            <div className="service-card">
              <h3>Implantes dentales</h3>
              <p>Recuperá piezas dentales con implantes seguros y duraderos.</p>
            </div>

            <div className="service-card">
              <h3>Ortodoncia</h3>
              <p>Corrección de la alineación dental con técnicas modernas.</p>
            </div>

            <div className="service-card">
              <h3>Blanqueamiento</h3>
              <p>Tratamientos profesionales para una sonrisa más blanca.</p>
            </div>

            <div className="service-card">
              <h3>Odontología general</h3>
              <p>Controles, limpieza y tratamientos para mantener tu salud bucal.</p>
            </div>

          </div>
        </section>


        {/* SOBRE NOSOTROS */}
        <section className="about">
          <h2>Sobre MS Dental</h2>

          <p>
            En MS Dental combinamos tecnología odontológica moderna
            con un equipo profesional comprometido con la salud y
            estética dental de nuestros pacientes.
          </p>
        </section>


        {/* POR QUE ELEGIRNOS */}
        <section className="benefits">

          <h2>¿Por qué elegirnos?</h2>

          <div className="benefits-grid">

            <div>
              <h4>✔ Tecnología moderna</h4>
              <p>Equipamiento odontológico de última generación.</p>
            </div>

            <div>
              <h4>✔ Profesionales especializados</h4>
              <p>Equipo con experiencia en tratamientos dentales.</p>
            </div>

            <div>
              <h4>✔ Atención personalizada</h4>
              <p>Cada tratamiento se adapta a las necesidades del paciente.</p>
            </div>

          </div>

        </section>


        {/* CONTACTO */}
        <section className="contact">

          <h2>Contacto</h2>

          <p>📍 Buenos Aires, Argentina</p>
          <p>📞 +54 11 0000 0000</p>
          <p>📧 contacto@msdental.com</p>

          <button>Reservar turno</button>

        </section>

      </main>

      <Footer />
    </>
  );
}