import React from "react";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div>
      <NavBar />
      <header
        className="text-center p-5 bg-dark text-white"
        id="inicio"
        style={{ minHeight: "50vh" }}
      >
        <h1>Bienvenido a Tercer Tiempo</h1>
        <p>Descubre nuestros productos y ofertas exclusivas</p>
      </header>
      <main>
        <section id="productos" className="p-5">
          <h2 className="text-center">Productos Destacados</h2>
          <p className="text-center">Explora nuestra selección de productos.</p>
        </section>
        <section id="ofertas" className="p-5 bg-light">
          <h2 className="text-center">Ofertas Especiales</h2>
          <p className="text-center">Aprovecha descuentos increíbles.</p>
        </section>
        <section id="blog" className="p-5">
          <h2 className="text-center">Blog</h2>
          <p className="text-center">Lee artículos sobre temas que te interesan.</p>
        </section>
        <section id="contacto" className="p-5 bg-light">
          <h2 className="text-center">Contáctanos</h2>
          <p className="text-center">Estamos aquí para ayudarte.</p>
        </section>
      </main>
    </div>
  );
};

export default App;