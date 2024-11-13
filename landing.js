"use strict";

const DOMButtonLogin = document.querySelector(".js-button-login");

DOMButtonLogin.addEventListener("click", (event) => {
  event.preventDefault();

  window.location = "community.html";
});
