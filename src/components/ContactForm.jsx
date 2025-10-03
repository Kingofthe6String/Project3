import React from "react";

export default function ContactForm() {
  return (
    <div className="contact-container">
      <form className="contact-form">
        <h2 className="contact-title">Get in Touch</h2>
        <input type="text" placeholder="Full Name" className="contact-input" />
        <input type="email" placeholder="Email" className="contact-input" />
        <textarea
          name="message"
          placeholder="Type your message here..."
          className="contact-textarea"
        ></textarea>
        <button type="submit" className="contact-button">
          Send Message
        </button>
      </form>
    </div>
  );
}
