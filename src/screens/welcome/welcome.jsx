import React from "react";
import { Link } from "react-router-dom";

import { images } from "../../assets";
import { vectorImages } from "../../assets";

import { Button } from "../../components";

function Welcome() {
  return (
    <React.Fragment>
      <div className="we_wrapper">
        <section className="we_container">
          <div className="we_content">
            <div className="we_highlight">
              <span>bem-vindo ao</span>
            </div>
            <div className="we_app_logo">
              <img src={vectorImages.logos.challenge} alt="#" />
            </div>
            <div className="nossa_logo">
              <img src={vectorImages.logos.brand} alt="#" />
            </div>
            <div className="image_characters">
              <img src={images.characters.random.maleAndFemale} alt="#" />
              <div className="we_btn">
                <Link to="/gender">
                  <Button
                    text="Quero Jogar"
                    className="btn we_position btn_color-main"
                  />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
}

export { Welcome };
