import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid navItem">
            <a class="navbar-brand logo" href="#">
              Jio
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                
                <Link to="/">
                  <a class="nav-link active  nav-letter" aria-current="page">
                    Home
                  </a>
                </Link>

                <Link to="/Mobile">
                  <a class="nav-link nav-letter">Mobile</a>
                </Link>

                <Link to="/True5G">
                  <a class="nav-link  nav-letter">True5G</a>
                </Link>

                <Link to="/JioFiber">
                 
                  <a class="nav-link nav-letter">JioFiber</a>
                </Link>

                <Link to="/AirFiber">
                 
                  <a class="nav-link nav-letter">AirFiber</a>
                </Link>

                <Link to="/Business">
                
                  <a class="nav-link nav-letter">Business</a>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
