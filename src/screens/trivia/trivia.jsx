import React from "react";

import { Header, Display, AnswerButton } from "../../components";

function Trivia() {
  return (
    <React.Fragment>
      <div className="tr_wrapper">
        <section className="tr_container">
          <div className="tr_content">
            <div className="tr_highlight">
              <Header />
            </div>
            <div className="tr_app_logo">
              <Display />
            </div>
            <div className="tr_description">
              <span>
                O João está a expandir o seu negócio. Que seguro o ajuda a
                proteger o seu escritório contra incêndios e roubos?
              </span>
            </div>
            <div className="tr_answers-container">
              <AnswerButton text="First Answer"/>
              <AnswerButton text="First Answer"/>
              <AnswerButton text="First Answer"/>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
}

export { Trivia };
