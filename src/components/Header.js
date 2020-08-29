import React from "react";
import ParcelLogo from "../assets/img/img.png";
import "./Style/Header.sass";

const Header = () => (
  <header>
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <img width="250" src={ParcelLogo} alt="Logo" />
        </a>
      </div>
    </nav>
  </header>
);

export default Header;
