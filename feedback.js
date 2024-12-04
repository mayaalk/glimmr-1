"use strict";

const DOMNavProfile = document.querySelector(".js-nav-profile");
const DOMNavSwipe = document.querySelector(".js-nav-swipe");

DOMNavProfile.addEventListener("click", () => {
  sessionStorage.page = "profile";
});

DOMNavSwipe.addEventListener("click", () => {
  sessionStorage.page = "swipe";
});

const DOMButtonSubmit = document.querySelector(".js-button-submit");
const DOMButtonOk = document.querySelector(".js-button-ok");

const DOMModalConfirm = document.querySelector(".js-modal-confirm");
const DOMModalConfirmInner = document.querySelector(".js-modal-confirm-inner");

const DOMFormFeedback = document.querySelector(".js-form-feedback");
const DOMPageFeedback = document.querySelector(".js-page-feedback");

document.addEventListener("keyup", (event) => {
  if (event.key === "Escape") {
    DOMModalConfirm.classList.add("is-hidden");
  }
});

DOMButtonSubmit.addEventListener("click", (event) => {
  event.preventDefault();

  const inputs = new FormData(DOMFormFeedback);
  const values = [inputs.get("happy"), inputs.get("recommend"), inputs.get("ideas"), inputs.get("share")];

  if (values.find((truthy) => truthy)) {
    DOMModalConfirm.classList.remove("is-hidden");

    DOMFormFeedback.reset();
    DOMPageFeedback.scroll(0, 0);
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
