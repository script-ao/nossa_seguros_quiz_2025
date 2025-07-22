import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { vectorImages } from "../../assets";
import { Button } from "../../components";

import { GameContext } from "../../context";

function getLevel(currentQuestionIndex) {
  // Each level has 3 questions, so level = (index / 3) + 1
  if (currentQuestionIndex < 3) return 1;
  if (currentQuestionIndex < 6) return 2;
  return 3;
}

function Checkpoint() {
  const navigate = useNavigate();
  const [state, dispatch] = useContext(GameContext);

  const level = getLevel(state.currentQuestionIndex || 0);

  // Handle continue button click
  const handleContinue = () => {
    navigate("/trivia");
  };

  // Handle win button click
  const handleWin = () => {
    dispatch({ type: "reset_game" });
    navigate("/win");
  };

  // Handle play again button click (for level 3)
  const handlePlayAgain = () => {
    dispatch({ type: "reset_game" });
    navigate("/");
  };

  // Level-specific content
  let title = "";
  let description = "";
  let buttons = null;

  if (level === 1) {
    title = "Wow!";
    description =
      "Se chegou até aqui, é porque está bem informado e consciente da importância de proteger quem mais ama. Deseja Continuar?";
    buttons = (
      <>
        <Button
          text="Sim, continuar!"
          className="btn btn_color-main"
          onClick={handleContinue}
        />
        <Button
          text="Terminar por aqui."
          className="btn btn_color-main"
          onClick={handleWin}
        />
      </>
    );
  } else if (level === 2) {
    title = "Muito bem!";
    description =
      "As perguntas estão a ficar um pouco mais desafiantes, mas a sua determinação mostra que está preparado para ir mais longe. Deseja Continuar?";
    buttons = (
      <>
        <Button
          text="Sim, continuar!"
          className="btn btn_color-main"
          onClick={handleContinue}
        />
        <Button
          text="Terminar por aqui."
          className="btn btn_color-main"
          onClick={handleWin}
        />
      </>
    );
  } else {
    title = "Conseguiu!";
    description =
      "A sua dedicação e conhecimento trouxeram-no até aqui e isso diz muito sobre si. Parabéns, receba o seu prémio!";
    buttons = (
      <Button
        text="Jogar novamente"
        className="btn btn_color-main"
        onClick={handlePlayAgain}
      />
    );
  }

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
            <span className="ch_title">{title}</span>
            <div className="ch_description-content">
              <span>{description}</span>
            </div>
          </div>
          <div className="ch_btn-container">{buttons}</div>
        </main>
      </section>
    </React.Fragment>
  );
}

export { Checkpoint };

