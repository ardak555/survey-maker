import { create_question } from "./pages/create_question.js";

let question = {
    question1: "Soruyu Girin:",
};

let link = document.createElement('link');
link.rel = 'stylesheet';
link.href = './survey_style.css';
document.head.appendChild(link);

const main_container = document.createElement("div");
main_container.classList.add("main_container");
document.body.append(main_container);

const content_container = document.createElement("div");
content_container.classList.add("content_container");
main_container.append(content_container);

const header_container = document.createElement("div");
header_container.classList.add("header_container");
header_container.textContent = "Anketi Oluşturmaya Başlayın";

const start_container = document.createElement("div");
start_container.classList.add("start_container");
start_container.textContent = "→";

content_container.append(header_container, start_container);

start_container.addEventListener("click", () => {
    content_container.innerHTML = "";
    create_question(question, content_container);
    content_container.classList.remove("content_container");
    content_container.classList.add("question_content_container")
});
