import React from "react";

export default function ContactForm() {
  return (
    <div className="contact-container">
      <form className="contact-form">
        <input type="text" placeholder="Full Name" className="contact-input" />
        <input type="email" placeholder="Email" className="contact-input" />
        <textarea
          name="message"
          cols="30"
          rows="6"
          placeholder="Type message here"
          className="contact-textarea"
        ></textarea>
        <button type="submit" className="contact-button">
          Send Message
        </button>
      </form>
    </div>
  );
}
