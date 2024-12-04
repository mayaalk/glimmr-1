"use strict";

const DOMNavProfile = document.querySelector(".js-nav-profile");
const DOMNavSwipe = document.querySelector(".js-nav-swipe");

DOMNavProfile.addEventListener("click", () => {
  sessionStorage.page = "profile";
});

DOMNavSwipe.addEventListener("click", () => {
  sessionStorage.page = "swipe";
});

const DOMArticleHead = document.querySelector(".js-article-head");
const DOMArticleBody = document.querySelector(".js-article-body");

const { title, text } = JSON.parse(sessionStorage.article);

DOMArticleHead.textContent = title;

DOMArticleBody.innerHTML = `${text.map((line) => `<p>${line}</p>`).join("\n")}${DOMArticleBody.innerHTML}`;
