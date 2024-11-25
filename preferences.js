"use strict";

const DOMButtonSubmit = document.querySelector(".js-button-submit");
const DOMButtonOk = document.querySelector(".js-button-ok");

const DOMModalConfirm = document.querySelector(".js-modal-confirm");
const DOMModalConfirmInner = document.querySelector(".js-modal-confirm-inner");

const DOMFormPreferences = document.querySelector(".js-form-preferences");
const DOMPagePreferences = document.querySelector(".js-page-preferences");

document.addEventListener("keyup", (event) => {
  if (event.key === "Escape") {
    DOMModalConfirm.classList.add("is-hidden");
  }
});

DOMButtonSubmit.addEventListener("click", (event) => {
  event.preventDefault();

  const inputs = new FormData(DOMFormPreferences);
  const values = [
    inputs.get("min-age"),
    inputs.get("max-age"),
    inputs.get("gender"),
    inputs.get("location"),
    inputs.get("min-height"),
    inputs.get("max-height"),
    inputs.get("body-type"),
    inputs.get("education"),
    inputs.get("religion"),
    inputs.get("political-views"),
    inputs.get("pets"),
    inputs.get("smoking"),
    inputs.get("drinking"),
    inputs.get("activity-level"),
    inputs.get("relationship-type"),
    inputs.get("family-plans"),
    inputs.get("relationship-style"),
    inputs.get("last-active"),
  ];

  if (values.find((truthy) => truthy)) {
    DOMModalConfirm.classList.remove("is-hidden");

    DOMFormPreferences.reset();
    DOMPagePreferences.scroll(0, 0);
  }
});

DOMButtonOk.addEventListener("click", () => {
  DOMModalConfirm.classList.add("is-hidden");
});

DOMModalConfirm.addEventListener("click", () => {
  DOMModalConfirm.classList.add("is-hidden");
});

DOMModalConfirmInner.addEventListener("click", (event) => {
  event.stopPropagation();
});