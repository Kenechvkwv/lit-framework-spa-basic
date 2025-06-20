// src/main.js
import "./ContactForm.js";
import "./AboutPage.js";

const root = document.getElementById("app");

function renderRoute() {
  const path = window.location.pathname;
  if (path === "/about") {
    root.innerHTML = `<about-page></about-page>`;
  } else {
    root.innerHTML = `<contact-form></contact-form>`;
  }
}

window.addEventListener("popstate", renderRoute);
renderRoute();
