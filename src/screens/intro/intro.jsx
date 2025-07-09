import React from "react";
import { Link } from "react-router-dom";

import { Button } from "../../components";
import { vectorImages } from "../../assets/svgs";

function Intro() {
  return (
    <React.Fragment>
      <section className="it_wrapper">
        <div className="it_container">
          <div className="it_content">
            <div className="it_highlight">
              <span>Antes de começarmos</span>
            </div>
            <div className="it_app_logo">
              <img src={vectorImages.logos.logo_01} alt="#" />
            </div>
            <div className="nossa_logo">
              <img src={vectorImages.logos.logo_02} alt="#" />
            </div>
            <div className="it_description">
              <span>
                Descubra como a Nossa
                <br />
                Seguros protege os
                <br />
                seus dias com escolhas inteligentes.
              </span>
              <span>
                Prepare-se para testar os seus
                <br />
                conhecimentos e garantir
                <br />
                um futuro mais seguro.
              </span>
            </div>
            <div>
              <Link to="/start">
                <Button
                  text="Começar Jogo"
                  className="btn btn_color-secondary"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export { Intro };
