"use strict";

const DOMNavProfile = document.querySelector(".js-nav-profile");
const DOMNavSwipe = document.querySelector(".js-nav-swipe");

DOMNavProfile.addEventListener("click", () => {
  sessionStorage.page = "profile";
});

DOMNavSwipe.addEventListener("click", () => {
  sessionStorage.page = "swipe";
});

const DOMButtonYes = document.querySelector(".js-button-yes");
const DOMButtonNo = document.querySelector(".js-button-no");
const DOMButtonSubmit = document.querySelector(".js-button-submit");
const DOMButtonCancel = document.querySelector(".js-button-cancel");
const DOMButtonOk = document.querySelector(".js-button-ok");

const DOMModalSurvey = document.querySelector(".js-modal-survey");
const DOMModalSurveyInner = document.querySelector(".js-modal-survey-inner");
const DOMModalStart = document.querySelector(".js-modal-start");
const DOMModalStartInner = document.querySelector(".js-modal-start-inner");
const DOMModalFinish = document.querySelector(".js-modal-finish");
const DOMModalFinishInner = document.querySelector(".js-modal-finish-inner");

const DOMFormReport = document.querySelector(".js-form-report");
const DOMTextContact = document.querySelector(".js-text-contact");

const Modals = [
  [DOMModalSurvey, DOMModalSurveyInner],
  [DOMModalStart, DOMModalStartInner],
  [DOMModalFinish, DOMModalFinishInner]
];

Modals.forEach(([Modal, ModalInner]) => {
  Modal.addEventListener("click", () => {
    Modal.classList.add("is-hidden");
    sessionStorage.survey = "";
  });

  ModalInner.addEventListener("click", (event) => {
    event.stopPropagation();
  });
});

document.addEventListener("keyup", (event) => {
  if (event.key === "Escape") {
    Modals.forEach(([Modal]) => {
      Modal.classList.add("is-hidden");
      sessionStorage.survey = "";
    });
  }
});

if (sessionStorage.survey) {
  DOMModalSurvey.classList.remove("is-hidden");
}

DOMButtonYes.addEventListener("click", () => {
  DOMModalSurvey.classList.add("is-hidden");
  sessionStorage.survey = "";
});

DOMButtonNo.addEventListener("click", () => {
  DOMModalSurvey.classList.add("is-hidden");
  DOMModalStart.classList.remove("is-hidden");
  sessionStorage.survey = "";
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
