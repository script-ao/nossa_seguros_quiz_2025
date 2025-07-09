import React from "react";
import { vectorImages } from "../../assets";
import { Button } from "../../components";
function Win() {
  return (
    <React.Fragment>
      <section className="wi_wrapper">
        <main className="wi_container">
          <div className="wi_image_container">
            <div>
              <img src={vectorImages.logos.brand} alt="" />
            </div>
            <div>
              <img src={vectorImages.logos.win} alt="" />
            </div>
            </div>
            <div className="wi_description-container">
              <span className="wi_title">Parabéns!</span>
              <div className="wi_description-content">
                <span>
                  Você mostrou que esta bem informado e preparado para garantir a sua tranquilidade e da sua familia.
                </span>
                <span>
                  Na nossa seguros, a sua segurança é a nossa prioridade.
                </span>
              </div>
            </div>
            <div className="wi_btn-container">
              <Button text="Receber prémio" className="btn btn_color-main " />
            </div>
        </main>
      </section>
    </React.Fragment>
  );
}

export { Win };
