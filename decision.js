"use strict";

const DOMNavProfile = document.querySelector(".js-nav-profile");
const DOMNavSwipe = document.querySelector(".js-nav-swipe");

DOMNavProfile.addEventListener("click", () => {
  sessionStorage.page = "profile";
});

DOMNavSwipe.addEventListener("click", () => {
  sessionStorage.page = "swipe";
});

const DOMLinkRomance = document.querySelector(".js-link-romance");
const DOMLinkSex = document.querySelector(".js-link-sex");

const DOMButtonRomance = document.querySelector(".js-button-romance");
const DOMButtonSex = document.querySelector(".js-button-sex");

switch (sessionStorage.page) {
  case "profile":
    DOMLinkRomance.href = "edit-profile.html";
    DOMLinkSex.href = "edit-profile.html";
    break;
  case "swipe":
    DOMLinkRomance.href = "preferences.html";
    DOMLinkSex.href = "preferences.html";
    break;
};

DOMButtonRomance.addEventListener("click", () => {
  sessionStorage.channel = "romance";
});

DOMButtonSex.addEventListener("click", () => {
  sessionStorage.channel = "sex";
});
