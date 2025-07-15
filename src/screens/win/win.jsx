import React from "react";
import { useNavigate } from "react-router-dom";

import { vectorImages } from "../../assets";
import { Button } from "../../components";

function Win() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/register");
  }

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
                <p>Você mostrou que está bem</p>
                <p>informado e preparado para</p>
                <p>garantir a sua tranquilidade e a</p>
                <p>da sua família.</p>
              </span>
              <span>
                <p>Na Nossa Seguros, a sua</p>
                <p>segurança é a nossa prioridade.</p>
              </span>
            </div>
          </div>
          <div className="wi_btn-container">
            <Button
              text="receber prémio"
              className="btn btn_color-main "
              onClick={handleClick}
            />
          </div>
        </main>
      </section>
    </React.Fragment>
  );
}

export { Win };
