import React,{useState} from "react";
import { vectorImages } from "../../assets";
import { Button } from "../../components";
function Register() {
  const [name, setName] =useState('')
  const [email, setEmail] =useState('')
  const [phone, setPhone] =useState('')

  function handleonSubmit(e){
    e.preventDefault();

    const payload={
      name,
      email,
      phone,
    }

    console.log(payload);
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

            <form className="re_form_wrapper" onSubmit={handleonSubmit}>
              <p>Prencha os seus dados</p>

              <div className="re_form_container">
                <div>
                  <label htmlFor="name_input">NOME</label>
                  <input type="text" id="name_input" value={name}
                  onChange={(e) => setName(e.target.value)}/>
                </div>
                <div>
                  <label htmlFor="email_input">EMAIL</label>
                  <input type="email" id="email_input" value={email}
                  onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div>
                  <label htmlFor="telefone_input">Telefone</label>
                  <input type="number" id="telefone_input" value={phone}
                  onChange={(e) => setPhone(e.target.value)}/>
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
