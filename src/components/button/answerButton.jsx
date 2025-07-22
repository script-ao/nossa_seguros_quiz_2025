import React, { useContext, useState } from "react";
import { GameContext } from "../../context";

function AnswerButton(props) {
  const { text, isCorrect, onClick, id, disabled, selected } = props;
  const [animation, setAnimation] = useState("");

  const handleClick = () => {
    if (disabled) return;
    setAnimation("btn-blink");
    setTimeout(() => {
      setAnimation(isCorrect ? "btn-correct" : "btn-incorrect");
      setTimeout(() => {
        if (onClick) {
          onClick(id, isCorrect);
        }
      }, 400); // tempo para mostrar cor final
    }, 400); // tempo de piscar
  };

  return (
    <React.Fragment>
      <button
        className={`btn btn_color-secondary ${animation} ${selected ? "selected" : ""}`}
        onClick={handleClick}
        disabled={disabled}
      >
        <span>{text}</span>
      </button>
    </React.Fragment>
  );
}

export { AnswerButton };
