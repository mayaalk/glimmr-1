"use strict";

const DOMButtonReport = document.querySelector(".js-button-report");
const DOMButtonSubmit = document.querySelector(".js-button-submit");
const DOMButtonCancel = document.querySelector(".js-button-cancel");
const DOMButtonOk = document.querySelector(".js-button-ok");

const DOMModalStart = document.querySelector(".js-modal-start");
const DOMModalStartInner = document.querySelector(".js-modal-start-inner");
const DOMModalFinish = document.querySelector(".js-modal-finish");
const DOMModalFinishInner = document.querySelector(".js-modal-finish-inner");
const DOMModalForm = document.querySelector(".js-modal-form");

const DOMNameSelect = document.querySelector(".js-name-select");

const DOMContactYes = document.querySelector(".js-contact-yes");
const DOMContactNo = document.querySelector(".js-contact-no");
const DOMContactText = document.querySelector(".js-text-contact");

DOMButtonReport.addEventListener("click", () => {
  DOMModalStart.classList.remove("is-hidden");

  DOMModalForm.reset();
  DOMModalForm.scroll(0, 0);
});

DOMButtonSubmit.addEventListener("click", (event) => {
  event.preventDefault();

  if (DOMNameSelect.value > 0) {
    if (DOMContactYes.checked) {
      DOMContactText.classList.remove("is-hidden");
    } else {
      DOMContactText.classList.add("is-hidden");
    }

    DOMModalStart.classList.add("is-hidden");
    DOMModalFinish.classList.remove("is-hidden");
  }
});

DOMButtonCancel.addEventListener("click", () => {
  DOMModalStart.classList.add("is-hidden");
});

DOMButtonOk.addEventListener("click", () => {
  DOMModalFinish.classList.add("is-hidden");
});

DOMModalStart.addEventListener("click", () => {
  DOMModalStart.classList.add("is-hidden");
});

DOMModalStartInner.addEventListener("click", (event) => {
  event.stopPropagation();
});

DOMModalFinish.addEventListener("click", () => {
  DOMModalFinish.classList.add("is-hidden");
});

DOMModalFinishInner.addEventListener("click", (event) => {
  event.stopPropagation();
});
