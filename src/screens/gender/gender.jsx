import React from "react";
import { Link } from "react-router-dom";

import { Footer } from "../../components";

import { images } from "../../assets";
import { vectorImages } from "../../assets";

function Gender() {
  return (
    <React.Fragment>
      <div className="st_wrapper">
        <section className="st_container">
          <div className="st_content">
            <div className="st_highlight">
              <span>
                Cada jornada é diferente.
                <br />
                Mas todas merecem protecção.
              </span>
            </div>
            <div className="st_app_logo">
              <img src={vectorImages.logos.logo_01} alt="#" />
            </div>
            <div className="nossa_logo">
              <img src={vectorImages.logos.logo_02} alt="#" />
            </div>
            <div className="st_description">
              <span>
                Escolha o seu
                <br />
                personagem
              </span>
            </div>
            <div className="st_btns_container">
              <div className="st_btn_container-female">
                <Link to="/trivia">
                  <button>
                    <img src={images.characters.charFemaleBk} alt="" />
                  </button>
                </Link>
                <span>Carla</span>
              </div>
              <div className="st_description">
                <span>Ou</span>
              </div>
              <div className="st_btn_container-male">
                <Link to="/trivia">
                  <button>
                    <img src={images.characters.charMaleBk} alt="" />
                  </button>
                </Link>
                <span>João</span>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export { Gender };
