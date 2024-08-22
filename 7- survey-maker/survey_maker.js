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
    --popup-bg-color:#667588c2;
    --popup-content-color:#28314E;
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

.survey_question_content_area{
    padding: 2em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1.1em;
}

.survey_question_name{
    font-size:1.4em;
    font-weight: 550;
}

.question_input{
    padding:.3em;
    width:90%;
    height:2em;
    background-color:var(--text-input-color);
    border:none;
    border-radius:5px;
}

.question_input:isactive{
    border:1px solid var(--text-input-color);
}

.question_type{
    width: 82.5%;
    height: 3em;
    border: 1px solid var(--coice-color);
    border-radius: 5px;
    padding: 0.5em;
    margin: 0 2em;
}

.question_button{
    width: 90%;
    height: 6em;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.add_question, .add_answer{
    width: 6em;
    border: 1px solid var(--chosen-color);
    padding: .5em;
    border-radius: 5px;
    background: var(--chosen-color);
    color: white;
    text-align: center;
}

.navigate_button{
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 2em;
}

.next_button, .prev_button{
    width: 6em;
    border: 1px solid var(--chosen-color);
    padding: .5em;
    border-radius: 5px;
    background: var(--button-color);
    color: white;
    text-align: center;
}

.popup_background{
    display: flex;
    justify-content:center;
    align-items: center;
    height:100vh;
    width: 100%;
    position:absolute;
    top:0;
    left:0;
    background: var(--popup-bg-color);
}

.popup_content{
    height:50vh;
    width:45vw;
    background:var(--popup-content-color);
    border-radius:5px;
    display:flex;
    flex-direction: column;
}

.popup_content_header{
    color: var(--content-color);
    font-size: 2em;
    font-weight: 600;
    padding:.4em;
}

.popup_answer_input{
    padding: .3em 0.4em;
    color: var(--background-color);
}

.answer_container{
    gap: 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: center;
    height: fit-content;
    width: 100%;
    padding: .2em;
}

.answer_area{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;
}

.popup_answer_input_field{
    width: 60%;
    height: 1.3em;
    border: none;
    border-radius: 5px;
    background: var(--coice-color);
    padding: 0.3em;
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
