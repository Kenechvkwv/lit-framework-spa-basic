// src/ContactForm.js
import { LitElement, html, css } from "lit";

class ContactForm extends LitElement {
  static styles = css`
    form {
      display: grid;
      gap: 1rem;
      max-width: 400px;
      margin: auto;
      padding: 2rem;
      border-radius: 10px;
      background: #f3f3f3;
      font-family: sans-serif;
    }
    input,
    textarea,
    button {
      padding: 0.75rem;
      border: 1px solid #ccc;
      border-radius: 6px;
      font-size: 1rem;
    }
    button {
      background: #007bff;
      color: white;
      cursor: pointer;
    }
  `;

  render() {
    return html`
      <form @submit=${this.handleSubmit}>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea rows="4" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    `;
  }

  handleSubmit(e) {
    e.preventDefault();
    alert("Message sent! (Pretend this submits to a server)");
  }
}

customElements.define("contact-form", ContactForm);
