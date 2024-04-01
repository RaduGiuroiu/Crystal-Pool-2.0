import React from "react";
import "./Contact.css";
import ContactImage from "../../assets/contact/contact.jpg";

export default function Contact() {
  return (
    <>
      <section id="contact">
        <div className="container">
          <div className="contact_wrapper">
            <div className="contact_col">
              <div className="contact_image">
                <img src={ContactImage} alt="Contact" />
              </div>
            </div>
            <div className="contact_col">
              <h2>Contactez-nous</h2>
              <form>
                <div className="input_wrapper">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Votre nom et prénom..."
                    autocomplete="off"
                  />
                </div>
                <div className="input_wrapper">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Votre numéro de téléphone..."
                    autocomplete="off"
                  />
                </div>
                <div className="input_wrapper">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Votre adresse e-mail..."
                    autocomplete="off"
                  />
                </div>
                <div className="input_wrapper">
                  <textarea placeholder="Rédigez votre demande..."></textarea>
                </div>
                <div className="btn_wrapper">
                  <button type="submit" className="btn">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
