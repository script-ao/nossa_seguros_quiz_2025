import React from "react";
import { vectorImages } from "../../assets";

function Header() {
  return (
    <React.Fragment>
      <div className="he_wrapper">
        <div className="he_container">
            <div className="game_logo">
                <img src={vectorImages.logos.logo_01} alt="" />
            </div>
            <div className="brand_logo">
                <img src={vectorImages.logos.logo_02} alt="" />
            </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export { Header };
