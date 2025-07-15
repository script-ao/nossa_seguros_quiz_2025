import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { vectorImages } from "../../assets";
import { Button } from "../../components";

import { GameContext } from "../../context";

function Checkpoint() {
  const navigate = useNavigate();
  const [state, dispatch] = useContext(GameContext);

  // Handle continue button click
  const handleContinue = () => {
    // Continue to trivia with current state
    navigate("/trivia");
  };

  // Handle win button click
  const handleWin = () => {
    // Reset game state before navigating
    dispatch({ type: "reset_game" });
    navigate("/win");
  };

  return (
    <React.Fragment>
      <section className="ch_wrapper">
        <main className="ch_container">
          <div className="ch_image_container">
            <div>
              <img src={vectorImages.logos.challenge} alt="" />
            </div>
            <div>
              <img src={vectorImages.logos.brand} alt="" />
            </div>
          </div>
          <div className="ch_description-container">
            <span className="ch_title">Parabéns!</span>
            <div className="ch_description-content">
              <span>
                Você mostrou que está bem informado e preparado para garantir a
                sua tranquilidade e a da sua família.
              </span>
            </div>
          </div>
          <div className="ch_btn-container">
            <Button
              text="Continuar"
              className="btn btn_color-main"
              onClick={handleContinue}
            />
            <Button
              text="Vencer"
              className="btn btn_color-main"
              onClick={handleWin}
            />
          </div>
        </main>
      </section>
    </React.Fragment>
  );
}

export { Checkpoint };
