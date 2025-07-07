import React from "react";

function Button(props) {
  const { text, className } = props;
  return (
    <React.Fragment>
      <button className={className}><span>{text}</span></button>
    </React.Fragment>
  );
}

export { Button };
