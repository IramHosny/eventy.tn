import React, { useRef } from 'react'
import './CSS/Contact.css'
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_b0i8l2h', 'template_o505zqp', form.current, 
        'iRIGWZ7VuNV8C-m0z'
      )
      .then(
        () => {
          console.log('SUCCESS!');
          console.log("message sent")
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <div>
      <div className="form-main"  style={{marginBottom: '3%' }}>
      <div className="main-wrapper">
        <h2 className="form-head">Contactez-nous pour toute information ou pour devenir l'un de nos prestataires</h2>
        <form className="form-wrapper" ref={form} onSubmit={sendEmail}>
          <div className="form-card">
            <input
              className="form-input"
              type="text"
              name="user_name"
              required
            />
            <label className="form-label" htmlFor="full_name"> Nom et prénom </label>
          </div>

          <div className="form-card">
            <input
              className="form-input"
              type="email"
              name="user_email"
              required
            />
            <label className="form-label" htmlFor="email">Email</label>
          </div>

          <div className="form-card">
            <textarea
              className="form-textarea"
              maxLength="420"
              rows="3"
              name="message"
              required
            ></textarea>
            <label className="form-label" htmlFor="address">  </label>
          </div>

          <div className="btn-wrap">
            <button type="submit"> Envoyer </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Contact