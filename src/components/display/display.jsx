import React from "react";

import { Timer } from "../timer";
import { images } from "../../assets";

function Display({ onTimeUp }) {
  return (
    <React.Fragment>
      <div className="di_wrapper">
        <Timer onTimeUp={onTimeUp} />
        <div className="di_container">
          <video autoPlay loop poster={images.characters.male.charMaleWide}>
            <source
              src="https://res.cloudinary.com/dzqwgybgx/video/upload/v1751633940/Clients/Nossa%20Seguros/Videos/2025/Jul/Jo%C3%A3o/envato_video_gen_Jul_01_2025_16_19_14_ypilo1.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </React.Fragment>
  );
}

export { Display };
