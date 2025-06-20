// src/AboutPage.js
import { LitElement, html, css } from "lit";

class AboutPage extends LitElement {
  static styles = css`
    .container {
      padding: 2rem;
      font-family: sans-serif;
      text-align: center;
    }
  `;

  render() {
    return html`
      <div class="container">
        <h2>About Us</h2>
        <p>This is a Lit-based web component application.</p>
      </div>
    `;
  }
}

customElements.define("about-page", AboutPage);
