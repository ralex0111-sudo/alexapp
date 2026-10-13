
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });

    setSubmitted(false);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      message: ""
    });
  }

  return (
    <section className="page">
      <p className="eyebrow">LET'S CONNECT</p>
      <h1 className="page-title">Contact Me</h1>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Your Name</label>
        <input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          required
        />

        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
        />

        <label htmlFor="message">Your Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Write your message"
          rows="5"
          required
        />

        <button type="submit" className="btn btn-primary">
          Submit Message
        </button>

        {submitted && (
          <p className="success-message">
            Thank you! Your message was submitted in this demo.
          </p>
        )}
      </form>

      <p className="contact-note">
        Email: alexmca292@gmail.com
      </p>
    </section>
  );
}
