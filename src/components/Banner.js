import React from "react";
import logo from "../assets/logo.png";
import "../styles/Banner.scss";

const Banner = () => {
  return (
    <header className="App-banner">
      <div className="App-banner-top">
        <img src={logo} alt="logo de Kasa" />
        <ul>
          <li>Accueil</li>
          <li>A propos</li>
        </ul>
      </div>
      <div className="App-banner-bottom">
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
    </header>
  );
};

export default Banner;
