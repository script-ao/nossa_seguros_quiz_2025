import React, { useContext } from "react";
import { GameContext } from "../../context";
function AnswerButton(props) {
  const { text, isCorrect, onClick, id } = props;

  const handleClick = () => {
    if (onClick) {
      onClick(id, isCorrect);
    }
  };

  return (
    <React.Fragment>
      <button className="btn btn_color-secondary" onClick={handleClick}>
        <span>{text}</span>
      </button>
    </React.Fragment>
  );
}

export { AnswerButton };
