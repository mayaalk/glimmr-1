"use strict";

const DOMSearchButton = document.querySelector(".js-search-button");

const DOMResourceList = document.querySelector(".js-resource-list");
const DOMResourceLinks = document.querySelectorAll(".js-resource-link");
const DOMResourceNames = document.querySelectorAll(".js-resource-name");

const DOMResourceItem = document.querySelector(".js-resource-item");
const DOMResourceHead = document.querySelector(".js-resource-head");
const DOMResourceBack = document.querySelector(".js-resource-back");

DOMSearchButton.addEventListener("click", (event) => {
  event.preventDefault();
});

DOMResourceLinks.forEach((Link, i) => {
  const Name = DOMResourceNames[i];

  Link.addEventListener("click", () => {
    DOMResourceList.classList.add("is-hidden");
    DOMResourceItem.classList.remove("is-hidden");

    DOMResourceItem.scroll(0, 0);
    DOMResourceHead.textContent = Name.textContent;
  });
});

DOMResourceBack.addEventListener("click", () => {
  DOMResourceItem.classList.add("is-hidden");
  DOMResourceList.classList.remove("is-hidden");
});
