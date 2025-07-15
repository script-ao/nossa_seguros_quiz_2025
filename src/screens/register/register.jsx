import React, { useState } from "react";

import { vectorImages } from "../../assets";
import { Button } from "../../components";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !email || !phone) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    const payload = {
      name,
      email,
      phone,
    };

    fetch("https://platform.bisc8.digital/webhook/80235756-4d10-4881-855d-7423e67ffc27", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
    .then((res) => {
      if (!res.ok) throw new Error("Erro ao enviar dados");
      return res.json();
    })
    .then((data) => {
      console.log("Resposta do servidor:", data);
      alert("Dados submetidos com sucesso!");

      setName('');
      setEmail('');
      setPhone('');
    })
    .catch((error) => {
      console.error("Erro:", error);
      alert("Houve um erro ao submeter os dados. Tente novamente.");
    })

  }
  return (
    <React.Fragment>
      <section className="re_wrapper">
        <main className="re_container">
          <div className="re_image_container">
            <div>
              <img src={vectorImages.logos.challenge} alt="" />
            </div>
            <div>
              <img src={vectorImages.logos.brand} alt="" />
            </div>
          </div>

          <div className="re_description-container">
            <span className="re_title">Quer Receber</span>
            <span className="re_subtitle">O seu prémio?</span>
          </div>

          <form className="re_form_wrapper" onSubmit={handleSubmit}>
            <p>Prencha os seus dados</p>

            <div className="re_form_container">
              <div>
                <label htmlFor="name_input">NOME</label>
                <input
                  type="text"
                  id="name_input"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="email_input">EMAIL</label>
                <input
                  type="email"
                  id="email_input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="telefone_input">Telefone</label>
                <input
                  type="number"
                  id="telefone_input"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>
            <div className="re_btn-container">
              <Button text="Submeter" className="btn btn_color-main " />
            </div>
          </form>
        </main>
      </section>
    </React.Fragment>
  );
}

export { Register };
