import React from "react";

function AnswerButton(props) {
  const { text } = props;
  return (
    <React.Fragment>
      <button className="btn btn_color-secondary"><span>{text}</span></button>
    </React.Fragment>
  );
}

export { AnswerButton };
