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
        options: ["Seçiniz", "İstanbul", "Ankara", "İzmir", "Online"]
    }
];

let currentQuestionIndex = 0;
let answers = {};

let survey_style = document.createElement('style');
survey_style.innerHTML = `
    body{
        margin:0;
    }

    .main_content {
        display: flex;
        justify-content: center;
        align-items: center;
        height:100vh;
        background-color:#df73ff;
    }
    .survey_content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: 1px solid white;
        height: 50vh;
        width: 60vw;
        border-radius: 10px;
        background-color:white;
        box-shadow: 3px 4px 4px  #000;
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
        border: 1px solid black;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        margin: 5px;
        cursor: pointer;
    }

    .navi_button{
        width: 100%;
        display: flex;
        align-items: flex-start;
        justify-content: space-around;
    }

    .prev_button {
        border: 2px solid #df73ff; /* Sadece renk yerine kalınlık ve renk belirttim */
        background: #df73ff;
        border-radius: 10px;
        padding: 1em;
        color: white;
        box-shadow: 2px 2px 3px #000;
    }

    .prev_button:active,
    .prev_button:disabled {
        opacity: 0.2;
    }

    .next_button {
        border: 2px solid #df73ff; /* Sadece renk yerine kalınlık ve renk belirttim */
        background: #df73ff;
        border-radius: 10px;
        padding: 1em;
        color: white;
        box-shadow: 2px 2px 3px #000;
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
prev_button.textContent = 'Önceki';
prev_button.classList.add('prev_button');
prev_button.disabled = true;

const next_button = document.createElement("button");
next_button.textContent = 'Sonraki';
next_button.classList.add('next_button');


navi_button.append(prev_button, next_button);
survey_content.append(survey_questions, survey_answers, navi_button);

renderQuestion();

function renderQuestion() {
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
                        c.style.backgroundColor = "#df73ff";
                        c.style.color = "white";
                        c.style.border = "1px solid #df73ff";
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
    }

    prev_button.disabled = currentQuestionIndex === 0;

    if (currentQuestionIndex === questions.length - 1) {
        next_button.textContent = "Gönder";
    } else {
        next_button.textContent = "Sonraki";
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

 // İlk soruyu render et
