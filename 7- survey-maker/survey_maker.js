import { create_question } from "./pages/create_question.js";

let question = {
    question1: "Soruyu Girin:",
};

let survey_style = document.createElement('style');
survey_style.innerHTML = `
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

:root {
    --content-color: #FFFFFF;
    --background-color: #667588;
    --button-color: #28314E;
    --coice-color:#484F65;
    --chosen-color:#667588;
    --shadow-color:#28314E;
    --text-input-color: #28314E4d;
    --chosen-color-shadow: #2A314D4d;
}

body {
    margin: 0;
    font-family: 'Poppins', sans-serif; 
}

.main_container{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: var(--background-color);
}

.content_container{
    padding: 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid var(--content-color);
    height: 80vh;
    width: 40vw;
    border-radius: 10px;
    background-color: var(--content-color);
    box-shadow: 2px 3px 110px var(--shadow-color);
    justify-content: space-evenly;
}

.question_content_container{
    padding: 1em;
    display: flex;
    flex-direction: column;
    border: 1px solid var(--content-color);
    height: 80vh;
    width: 40vw;
    border-radius: 10px;
    background-color: var(--content-color);
    box-shadow: 2px 3px 110px var(--shadow-color);
    justify-content: space-evenly;
}

.header_container{
    font-size: 4em;
    font-weight: 500;
    padding:.4em;
}

.start_container{
    font-family: monospace !important;
    font-size: 6em;
    font-weight: 500;
}
`;
document.head.append(survey_style);

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
