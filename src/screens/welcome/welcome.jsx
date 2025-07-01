import React from "react";
import { Link } from "react-router-dom";

import imageCharacters from "../../assets/images/characters/nossa_characters.png";
import nossaLogo from "../../assets/svgs/logos/nossa_logo.svg";
import logoGame from "../../assets/svgs/logos/logo_game.svg";

import { Footer, Button } from "../../components";

function Welcome() {
  return (
    <React.Fragment>
      <div className="we_wrapper">
        <section className="we_container">
          <div className="we_content">
            <div className="we_highlight">
              <h1>bem-vindo ao</h1>
            </div>
            <div className="we_app_logo">
              <img src={logoGame} alt="#" />
            </div>
            <div className="nossa_logo">
              <img src={nossaLogo} alt="#" />
            </div>
            <div className="image_characters">
              <img src={imageCharacters} alt="#" />
              <Link to="/intro">
                <Button
                  text="Quero Jogar"
                  className="btn we_position btn_color-main"
                />
              </Link>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export { Welcome };
