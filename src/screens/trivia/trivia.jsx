import React from "react";
import { Link } from "react-router-dom";

import { Footer, Button, Header, Display } from "../../components";
import { vectorImages } from "../../assets";

function Trivia() {
  return (
    <React.Fragment>
      <div className="tr_wrapper">
        <section className="tr_container">
          <div className="tr_content">
            <div className="tr_highlight">
              <Header />
            </div>
            <div className="tr_app_logo">
              <Display />
            </div>
            <div className="tr_description">
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
        </section>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export { Trivia };
