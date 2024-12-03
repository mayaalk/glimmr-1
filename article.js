"use strict";

const DOMArticleHead = document.querySelector(".js-article-head");
const DOMArticleBody = document.querySelector(".js-article-body");

const { title, text } = JSON.parse(localStorage.article);

DOMArticleHead.textContent = title;

DOMArticleBody.innerHTML = `${text.map((line) => `<p>${line}</p>`).join("\n")}${DOMArticleBody.innerHTML}`;
