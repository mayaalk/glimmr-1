"use strict";

const DOMNavProfile = document.querySelector(".js-nav-profile");
const DOMNavSwipe = document.querySelector(".js-nav-swipe");

DOMNavProfile.addEventListener("click", () => {
  sessionStorage.page = "profile";
});

DOMNavSwipe.addEventListener("click", () => {
  sessionStorage.page = "swipe";
});

const DOMButtonReport = document.querySelector(".js-button-report");
const DOMButtonSubmit = document.querySelector(".js-button-submit");
const DOMButtonCancel = document.querySelector(".js-button-cancel");
const DOMButtonOk = document.querySelector(".js-button-ok");

const DOMModalStart = document.querySelector(".js-modal-start");
const DOMModalStartInner = document.querySelector(".js-modal-start-inner");
const DOMModalFinish = document.querySelector(".js-modal-finish");
const DOMModalFinishInner = document.querySelector(".js-modal-finish-inner");

const DOMFormReport = document.querySelector(".js-form-report");
const DOMTextContact = document.querySelector(".js-text-contact");

const Modals = [
  [DOMModalStart, DOMModalStartInner],
  [DOMModalFinish, DOMModalFinishInner]
];

Modals.forEach(([Modal, ModalInner]) => {
  Modal.addEventListener("click", () => {
    Modal.classList.add("is-hidden");
  });

  ModalInner.addEventListener("click", (event) => {
    event.stopPropagation();
  });
});

document.addEventListener("keyup", (event) => {
  if (event.key === "Escape") {
    Modals.forEach(([Modal]) => {
      Modal.classList.add("is-hidden");
    });
  }
});

DOMButtonReport.addEventListener("click", () => {
  DOMModalStart.classList.remove("is-hidden");

  DOMFormReport.reset();
  DOMFormReport.scroll(0, 0);
});

DOMButtonSubmit.addEventListener("click", (event) => {
  event.preventDefault();

  const inputs = new FormData(DOMFormReport);

  if (inputs.get("name") > 0) {
    DOMTextContact.classList.toggle("is-hidden", inputs.get("contact") !== "yes");

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
