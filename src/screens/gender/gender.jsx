import React from "react";
import { Link } from "react-router-dom";
import { useContext} from "react"

import { images } from "../../assets";
import { vectorImages } from "../../assets";

import {GameContext} from "../../context"
function Gender() {
  const [state,Dispach] = useContext(GameContext);

 
  
  return (
    <React.Fragment>
      <div className="ge_wrapper">
        <section className="ge_container">
          <div className="ge_content">
            <div className="ge_highlight">
              <span>
                Cada jornada é diferente.
                <br />
                Mas todas merecem protecção.
              </span>
            </div>
            <div className="ge_app_logo">
              <img src={vectorImages.logos.challenge} alt="#" />
            </div>
            <div className="nossa_logo">
              <img src={vectorImages.logos.brand} alt="#" />
            </div>
            <div className="ge_description">
              <span>
                Escolha o seu
                <br />
                personagem
              </span>
            </div>
            <div className="ge_btns_container">
              <div className="ge_btn_container-female">
                <Link to="/trivia">
                  <button onClick={() => Dispach({type:'select_genere', payload: 'Carla'})}>
                    <img src={images.characters.female.charFemaleBk} alt="" />
                  </button>
                </Link>
                <span>Carla</span>
              </div>
              <div className="ge_description">
                <span>Ou</span>
              </div>
              <div className="ge_btn_container-male">
                <Link to="/trivia">
                  <button onClick={() => Dispach({type:'select_genere', payload: 'João'})}>
                    <img src={images.characters.male.charMaleBk} alt="" />
                  </button>
                </Link>
                <span>João</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
}

export { Gender };
