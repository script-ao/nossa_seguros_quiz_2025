import React from "react";
import { Link } from "react-router-dom";

import { vectorImages } from "../../assets";
import { Button } from "../../components";

function Win() {
  return (
    <React.Fragment>
      <section className="wi_wrapper">
        <main className="wi_container">
          <div className="wi_image_container">
            <div>
              <img src={vectorImages.logos.win} alt="" />
            </div>
            <div>
              <img src={vectorImages.logos.brand} alt="" />
            </div>
          </div>
          <div className="wi_description-container">
            <span className="wi_title">Parabéns!</span>
            <div className="wi_description-content">
              <span>
                Você mostrou que está bem informado e preparado para garantir a
                sua tranquilidade e a da sua família.
              </span>
              <span>
                Na Nossa Seguros, a sua segurança é a nossa prioridade.
              </span>
            </div>
          </div>
          <div className="wi_btn-container">
            <Link to="/register">
              <Button text="RECEBER Prémio" className="btn btn_color-main " />
            </Link>
          </div>
        </main>
      </section>
    </React.Fragment>
  );
}

export { Win };
