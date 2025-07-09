import React from "react";

import { vectorImages } from "../../assets";
import { Button } from "../../components";

function Lose() {
  return (
    <React.Fragment>
      <section className="lo_wrapper">
        <main className="lo_container">
          <div className="lo_image_container">
            <div>
              <img src={vectorImages.logos.lose} alt="" />
            </div>
            <div>
              <img src={vectorImages.logos.brand} alt="" />
            </div>
          </div>
          <div className="lo_description-container">
            <span className="lo_title">Foi por pouco!</span>
            <div className="lo_description-content">
              <span>
                Você fez um bom esforço, mas ainda pode aprender mais sobre como
                proteger o seu mundo.
              </span>
              <span>
                Tente novamente e descubra o que a Nossa Seguros tem para si!
              </span>
            </div>
          </div>
          <div className="lo_btn-container">
            <Button text="Tentar Novamente" className="btn btn_color-main " />
          </div>
        </main>
      </section>
    </React.Fragment>
  );
}

export { Lose };
