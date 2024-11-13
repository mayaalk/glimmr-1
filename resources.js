"use strict";

const DOMSearchInput = document.querySelector(".js-search-input");
const DOMSearchButton = document.querySelector(".js-search-button");

const DOMResourceList = document.querySelector(".js-resource-list");
const DOMResourceLinks = document.querySelectorAll(".js-resource-link");
const DOMResourceNames = document.querySelectorAll(".js-resource-name");

const DOMResourceItem = document.querySelector(".js-resource-item");
const DOMResourceHead = document.querySelector(".js-resource-head");
const DOMResourceBack = document.querySelector(".js-resource-back");

DOMSearchButton.addEventListener("click", (event) => {
  event.preventDefault();

  const List = [];

  DOMResourceNames.forEach((Name, i) => {
    const Link = DOMResourceLinks[i];

    if (Name.textContent.toLowerCase().includes(DOMSearchInput.value.toLowerCase())) {
      Link.classList.remove("is-hidden");
      List.push(Link);
    } else {
      Link.classList.add("is-hidden");
    }
  });

  List.forEach((Link, i, arr) => {
    if (i < arr.length - 1) {
      Link.classList.add("has-sibling");
    } else {
      Link.classList.remove("has-sibling");
    }
  });
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
