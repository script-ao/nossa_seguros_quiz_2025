import React from "react";

import { Footer, Button } from "../../components";
import logoGame from "../../assets/svgs/logos/logo_game.svg";
import brandLogo from "../../assets/svgs/logos/nossa_logo.svg";

function Intro() {
  return (
    <React.Fragment>
      <div className="it_wrapper">
        <section className="it_container">
          <div className="it_content">
            <div className="it_highlight">
              <h1>Antes de começarmos</h1>
            </div>
            <div className="it_app_logo">
              <img src={logoGame} alt="#" />
            </div>
            <div className="nossa_logo">
              <img src={brandLogo} alt="#" />
            </div>
            <div className="it_description">
              <span>
                Descubra como a Nossa<br/>Seguros protege os<br/>seus dias com escolhas
                inteligentes.
              </span>
              <span>
                Prepare-se para testar os seus<br/>conhecimentos e garantir<br/>um
                futuro mais seguro.
              </span>
            </div>
            <div>
              <Button text="Começar Jogo" className="btn btn_color-secondary" />
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export { Intro };
