import React,{useContext} from "react";
import {GameContext} from "../../context"
function AnswerButton(props) {
  const { text } = props;
  const [state] = useContext(GameContext);
  

  return (
    <React.Fragment>
      <button className={`btn ${state.character_name === 'Carla' ? "btn_color-secondary" :' btn_color-main'}`}><span>{text}</span></button>
    </React.Fragment>
  );
}

export { AnswerButton };
