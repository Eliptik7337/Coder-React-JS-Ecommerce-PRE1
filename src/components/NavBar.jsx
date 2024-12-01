import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const NavBar = () => {
  const categories = ["Inicio", "Productos", "Ofertas", "Blog", "Contacto"];

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#">
          Tercer Tiempo
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {categories.map((category, index) => (
              <li className="nav-item" key={index}>
                <a className="nav-link" href={`#${category.toLowerCase()}`}>
                  {category}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;