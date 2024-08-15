let questions = [
    {
        type: "score",
        question: "Hizmetimize Kaç Puan Veriyorsunuz?"
    },
    {
        type: "score",
        question: "Müşteri Temsilcimize Kaç Puan Veriyorsunuz?"
    },
    {
        type: "score",
        question: "Ürünlerimizden memnun musunuz?"
    },
    {
        type: "scale",
        question: "Maaş Beklentiniz Nedir?",
        options: ["Seçiniz", "20000-30000", "30000-40000", "40000-50000", "50000+"]
    },
    {
        type: "scale",
        question: "Hangi Konumda Çalışmak istersiniz?",
        options: ["Seçiniz", "İstanbul", "Ankara", "İzmir", "Remote"]
    },
    {
        type: "single_opt",
        question: "Hangi şehirde taile gitmek istersiniz",
        options: ["Muğla","Hawai","Floransa","Berlin"],
        notes: "Yanlızca bir seçenek işaretleme yapınız!"
    },
    {
        type: "multiple_opt",
        question: "En çok yararlandığınız kampnaya/kampanyalar nelerdir",
        options: ["Kupon  ","Kargo bedava","Prime video","Müşteri temsilcisi önceliği","Ücretsiz randevulu Teslimat"],
        notes: "Birden Çok işaretleme yapabilirsiniz."
    },
    {
        type: "text",
        question: "Satın almış olduğunuz ürün hakkındaki görüşleriniz nedir?"
    }
];

let currentQuestionIndex = 0;
let answers = {};

let survey_style = document.createElement('style');
survey_style.innerHTML = `

@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

:root {
    --primary-color: #C5B67B;
    --secondary-color: #FF8B66;
    --text-color: #333333;
    --background-color: #f5f5f7;
}

body {
    margin: 0;
    font-family:'Poppins',sans-serif; 
}

.main_content {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #CCC098;
}

.survey_content {
    padding: 1em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid #EFE6CD;
    height: 75vh;
    width: 35vw;
    border-radius: 10px;
    background-color: #EFE6CD;
    box-shadow: 2px 3px 110px #9EA58D;
}

.survey_question_box, .survey_answers_box {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 20px;
}

.circle {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #7D8758;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    margin: 5px;
    cursor: pointer;
    color:#7D8758;
}

.navi_button {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
}

.prev_button {
    width: 7em;
    border: 2px solid #CCC098;
    background: #df73ff;
    border-radius: 16px;
    padding: 1em;
}

.prev_button:disabled {
    opacity: 0.2;
}

.next_button {
    width: 7em;
    border: 2px solid #C5B67B;
    background: #df73ff;
    border-radius: 16px;
    padding: 1em;
}

.next_button:disabled {
    opacity: 0.2;
}

.button--animated_back {
    background-color: var(--primary-color);
    color: white;
    overflow: hidden;
    position: relative;
}

.button--animated_back .button__text_back {
    display: inline-block;
    transition: transform 0.3s ease;
}

.button--animated_back .button__icon_back {
    position: absolute;
    left: -20px;
    transition: left 0.3s ease;
}

.button--animated_back:hover .button__text_back {
    transform: translateX(10px);
}

.button--animated_back:hover .button__icon_back {
    left: 10px;
}

.button--animated {
    background-color: var(--primary-color);
    color: white;
    overflow: hidden;
    position: relative;
}

.button--animated .button__text {
    display: inline-block;
    transition: transform 0.3s ease;
}

.button--animated .button__icon {
    position: absolute;
    right: -20px;
    transition: right 0.3s ease;
}

.button--animated:hover .button__text {
    transform: translateX(-10px);
}

.button--animated:hover .button__icon {
    right: 10px;
}

.prev_button:hover,
.next_button:hover {
    box-shadow: 2px 2px 3px #CCC098;
}


.sellect_opt{
    border:1px solid #9EA58D;
    border-radius:10px;
    padding:.6em;
    background-color:#EFE6CD;
    width:70%;
    color:#7D8758;
}

.input_text{
    width: 70%;
    min-height: 4em;
    border: 1px solid #7D8758;
    border-radius: 15px;
    background: #7d87584d;
}
`;
document.head.append(survey_style);

const main_content = document.createElement("div");
main_content.classList.add('main_content');
document.body.append(main_content);

const survey_content = document.createElement("div");
survey_content.classList.add('survey_content');
main_content.append(survey_content);

const survey_questions = document.createElement("div");
survey_questions.classList.add('survey_question_box');

const survey_answers = document.createElement("div");
survey_answers.classList.add("survey_answers_box");

const navi_button = document.createElement("div");
navi_button.classList.add('navi_button');

const prev_button = document.createElement("button");
prev_button.classList.add('button', 'button--animated_back', 'prev_button');

const buttonTexts = document.createElement("span");
buttonTexts.classList.add('button__text_back');
buttonTexts.textContent = 'Önceki';

const buttonIcons = document.createElement("span");
buttonIcons.classList.add('button__icon_back');
buttonIcons.textContent = '←';

prev_button.append(buttonIcons, buttonTexts);

const next_button = document.createElement("button");
next_button.classList.add('button', 'button--animated', 'next_button');

const buttonText = document.createElement("span");
buttonText.classList.add('button__text');
buttonText.textContent = 'Sonraki';

const buttonIcon = document.createElement("span");
buttonIcon.classList.add('button__icon');
buttonIcon.textContent = '→';

const question_number = document.createElement("div");
question_number.classList.add("question_number");

next_button.append(buttonText, buttonIcon);
navi_button.append(prev_button, next_button);

survey_content.append(survey_questions, survey_answers, navi_button,question_number);

renderQuestion();

function renderQuestion() {

    question_number.textContent = `${currentQuestionIndex + 1} / ${questions.length}`;

    survey_questions.textContent = questions[currentQuestionIndex].question;
    survey_answers.innerHTML = ''; 

    if (questions[currentQuestionIndex].type === 'score') {
        for (let i = 1; i <= 10; i++) {
            const circle = document.createElement("div");
            circle.classList.add("circle");
            circle.textContent = i;
            circle.addEventListener("click", () => {
                answers[questions[currentQuestionIndex].question] = i;
                const circles = survey_answers.querySelectorAll(".circle");
                circles.forEach((c, index) => {
                    if (index < i) {
                        c.style.backgroundColor = "#7D8758";
                        c.style.color = "white";
                        c.style.border = "1px solid #7D8758";
                    } else {
                        c.style.backgroundColor = "";
                        c.style.color = "";
                        c.style.border = "1px solid black"
                    }
                });
            });
            survey_answers.append(circle);
        }
    } else if (questions[currentQuestionIndex].type === 'scale') {
        const select = document.createElement("select");
        select.classList.add("sellect_opt")
        select.addEventListener("change", () => {
            answers[questions[currentQuestionIndex].question] = select.value;
        });
        questions[currentQuestionIndex].options.forEach(option => {
            const optionElement = document.createElement("option");
            optionElement.value = option;
            optionElement.textContent = option;
            select.append(optionElement);
        });
        survey_answers.append(select);
    } else if(questions[currentQuestionIndex].type === 'single_opt'){
        questions[currentQuestionIndex].options.forEach(option => {
            const label = document.createElement("label");
            const radio = document.createElement("input");
            radio.type = "radio";
            radio.name = "single_option";
            radio.value = option;
            radio.addEventListener("change", () => {
                answers[questions[currentQuestionIndex].question] = radio.value;
            });
            label.append(radio, option);
            survey_answers.append(label);
        });
    } else if(questions[currentQuestionIndex].type === 'multiple_opt'){
        questions[currentQuestionIndex].options.forEach(option => {
            const check_label = document.createElement("label");
            const check_box = document.createElement("input");
            check_box.type = "checkbox";
            check_box.value = option;
            check_box.addEventListener("change", () => {
                if (!answers[questions[currentQuestionIndex].question]) {
                    answers[questions[currentQuestionIndex].question] = [];
                }
                if (check_box.checked) {
                    answers[questions[currentQuestionIndex].question].push(check_box.value);
                } else {
                    const index = answers[questions[currentQuestionIndex].question].indexOf(check_box.value);
                    if (index > -1) {
                        answers[questions[currentQuestionIndex].question].splice(index, 1);
                    }
                }
            });
            check_label.append(check_box, option);
            survey_answers.append(check_label);
        })

    } else if(questions[currentQuestionIndex].type === 'text'){
        const input_aswer = document.createElement("input");
        input_aswer.classList.add("input_text");
        input_aswer.addEventListener("input", () => {
            answers[questions[currentQuestionIndex].question] = input_aswer.value;
        });
        survey_answers.append(input_aswer);
    }


    prev_button.disabled = currentQuestionIndex === 0;

    if (currentQuestionIndex === questions.length - 1) {
        buttonText.textContent = "Gönder";
        buttonIcon.textContent = "✓"
    } else {
        buttonText.textContent = "Sonraki";
    }
}

next_button.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        renderQuestion();
        next_button.disabled = false;
    } else if (currentQuestionIndex === questions.length - 1) {
        alert("Ankete Katıldığınız için Teşekkürler");
        next_button.disabled = true; 
    }

    console.log(answers);
});

prev_button.addEventListener("click", () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        renderQuestion();
    }

    
});
