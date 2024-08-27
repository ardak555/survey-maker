import { show_question } from "./show_question.js";

export function create_question(question, content_container) {
    let question_types = {
        type: ["Soru Tipini Seçin", "scale", "score", "single_option", "multiple_option", "text_question"],
    };

    let questionsArray = []; // Tüm soruları saklamak için bir dizi

    const createSurveyQuestion = () => {
        const newPage = document.createElement("div");
        newPage.classList.add("survey_page");

        const survey_question_content_area = document.createElement("div");
        survey_question_content_area.classList.add("survey_question_content_area");

        const survey_question_name = document.createElement("div");
        survey_question_name.classList.add("survey_question_name");
        survey_question_name.textContent = question.question1;

        const question_input = document.createElement("input");
        question_input.classList.add("question_input");
        survey_question_content_area.append(survey_question_name, question_input);

        const question_type = document.createElement("select");
        question_type.classList.add("question_type");

        question_types.type.forEach(type => {
            const option = document.createElement("option");
            option.value = type;
            option.textContent = type;
            question_type.appendChild(option);
        });

        const question_button = document.createElement("div");
        question_button.classList.add("question_button");

        const add_answer = document.createElement("div");
        add_answer.classList.add("add_answer");
        add_answer.textContent = "Cevap Ekle";
        const add_question = document.createElement("div");
        add_question.classList.add("add_question");
        add_question.textContent = "Soru Ekle";
        question_button.append(add_answer, add_question);

        const navigate_button = document.createElement("div");
        navigate_button.classList.add("navigate_button");

        const next_button = document.createElement("div");
        next_button.classList.add("next_button");
        next_button.textContent = "İleri";

        const prev_button = document.createElement("div");
        prev_button.classList.add("prev_button");
        prev_button.textContent = "Geri";

        navigate_button.append(prev_button, next_button);

        const popup_background = document.createElement("div");
        popup_background.classList.add("popup_background");
        popup_background.style.display = "none"; 

        const popup_content = document.createElement("div");
        popup_content.classList.add("popup_content");

        popup_background.append(popup_content);

        const popup_content_header = document.createElement("div");
        popup_content_header.classList.add("popup_content_header");
        popup_content_header.textContent = "Cevaplar";

        const popup_answer_content = document.createElement("div");
        popup_answer_content.classList.add("popup_answer_content");

        const popup_answer_input = document.createElement("div");
        popup_answer_input.classList.add("popup_answer_input");
        popup_answer_input.textContent = "Cevapları eklemek için + butonuna tıklayın";

        const maxInputs = 10;
        let currentInputCount = 2;

        const answer_area = document.createElement("div");
        answer_area.classList.add("answer_area");

        const answerContainer = document.createElement("div");
        answerContainer.classList.add("answer_container");

        for (let i = 0; i < currentInputCount; i++) {
            const newInput = document.createElement("input");
            newInput.type = "text";
            newInput.classList.add("popup_answer_input_field");
            answerContainer.appendChild(newInput);
        }

        const popup_answer_add = document.createElement("div");
        popup_answer_add.classList.add("popup_answer_add");

        const add_button = document.createElement("div");
        add_button.classList.add("add_button");
        add_button.textContent = "+";

        popup_answer_add.appendChild(add_button);

        popup_answer_add.addEventListener("click", () => {
            if (currentInputCount < maxInputs) {
                const newInput = document.createElement("input");
                newInput.type = "text";
                newInput.classList.add("popup_answer_input_field");
                answerContainer.appendChild(newInput);
                currentInputCount++;
            } else {
                alert("Maksimum 10 cevap şıkkı ekleyebilirsiniz");
            }
        });

        const popup_save_button = document.createElement("div");
        popup_save_button.classList.add("popup_save_button");

        const save_button = document.createElement("div");
        save_button.classList.add("save_button");
        save_button.textContent = "OK";

        popup_save_button.appendChild(save_button);
        answer_area.append(answerContainer, popup_answer_add);
        popup_answer_content.append(popup_answer_input, answer_area);
        popup_content.append(popup_content_header, popup_answer_content, popup_save_button);

        save_button.addEventListener("click", () => {
            const answers = [];
            const inputs = answerContainer.querySelectorAll(".popup_answer_input_field");
            let allFilled = true;

            inputs.forEach(input => {
                if (input.value.trim() === "") {
                    allFilled = false;
                }
                answers.push(input.value);
            });

            if (!allFilled) {
                alert("Cevap kısmı boş bırakılamaz");
            } else {
                console.log(answers);
                popup_background.style.display = "none";
            }
        });

        add_answer.addEventListener("click", () => {
            popup_background.style.display = "flex";
        });

        add_question.addEventListener("click", () => {
            const currentQuestion = {
                questionText: question_input.value,
                questionType: question_type.value,
                answers: Array.from(answerContainer.querySelectorAll(".popup_answer_input_field"))
                    .map(input => input.value)
                    .filter(answer => answer.trim() !== "") // Boş cevapları filtrele
            };
        
            if (currentQuestion.questionText.trim() === "" || currentQuestion.questionType === "Soru Tipini Seçin") {
                alert("Lütfen soru metnini ve soru tipini doldurunuz.");
            } else if (currentQuestion.answers.length === 0) {
                alert("Lütfen en az bir cevap ekleyiniz.");
            } else {
                questionsArray.push(currentQuestion);
                console.log(questionsArray);
        
                content_container.innerHTML = "";
                createSurveyQuestion();
            }
        });
        

        next_button.addEventListener("click", () => {
            if (questionsArray.length === 0) {
                alert("Lütfen en az bir soru ekleyin.");
            } else {
                // Son eklenen soruyu kontrol edin
                const lastQuestion = questionsArray[questionsArray.length - 1];
                if (lastQuestion.questionText.trim() === "" || lastQuestion.answers.length === 0) {
                    alert("Lütfen son eklenen sorunun metnini ve cevaplarını doldurun.");
                } else {
                    content_container.innerHTML = "";
                    show_question(content_container);
                    content_container.classList.remove("question_content_container");
                    content_container.classList.add("show_question_content_container");
                }
            }
        });
        

        newPage.append(survey_question_content_area, question_type, question_button, navigate_button, popup_background);
        content_container.appendChild(newPage);
    };

    createSurveyQuestion();
}
