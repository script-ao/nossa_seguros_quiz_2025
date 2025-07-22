import React, { useEffect } from "react";
import Confetti from "react-confetti";
import { useNavigate } from "react-router-dom";

import { vectorImages } from "../../assets";
import { Button } from "../../components";

function Win() {
  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigate("/register");
    }, 8000);

    return () => clearTimeout(timeoutId);
  }, [navigate]);

  function handleClick() {
    // Reset game and go to start
    navigate("/");
  }

  return (
    <React.Fragment>
      <section className="wi_wrapper">
        <Confetti width={window.innerWidth} height={window.innerHeight} />
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
            <span className="wi_title">Conseguiu!</span>
            <div className="wi_description-content">
              <span>
                A sua dedicação e conhecimento trouxeram-no até aqui e isso diz muito sobre si. Parabéns, receba o seu prémio!
              </span>
            </div>
          </div>
          <div className="wi_btn-container">
            <Button
              text="Jogar novamente"
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
