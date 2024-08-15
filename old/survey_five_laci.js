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
        options: ["Muğla","Hawai","Floransa","Berlin","Diğer"],
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
    --content-color: #FFFFFF;
    --background-color: #667588;
    --button-color: #28314E;
    --coice-color:#484F65;
    --chosen-color:#667588;
    --shadow-color:#28314E;
    --text-input-color: #28314E4d;
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
    background-color: var(--background-color);
}

.survey_content {
    padding: 1em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--content-color);
    height: 80vh;
    width: 40vw;
    border-radius: 6px;
    background-color: var(--content-color);
    box-shadow: 2px 3px 110px var(--shadow-color);
}

.survey_question_box, .survey_answers_box {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    margin-bottom: 20px;
}

.survey_answers_box_radio{
    display: flex;
    justify-content: flex-start;
    align-items: baseline;
    flex-direction: column;
    width:60%;
    gap:.5em;
}

.circle {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--coice-color);
    border-radius: 50%;
    width: 40px;
    height: 40px;
    margin: 5px;
    cursor: pointer;
    color:var(--coice-color);
}



.navi_button {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
}


.prev_button {
    width: 7.5em;
    border: 2px solid var(--button-color);
    background: var(button-color);
    border-radius: 6px;
    padding: 1em;
}

.prev_button:disabled {
    opacity: 0.2;
}

.next_button {
    width: 7.5em;
    border: 2px solid var(--button-color);
    background: var(--button-color);
    border-radius: 6px;
    padding: 1em;
}

.next_button:disabled {
    opacity: 0.2;
}

.button--animated_back {
    background-color: var(--button-color);
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
    background-color: var(--button-color);
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
    box-shadow: 2px 2px 3px var(--chosen-color-shadow);
}


.sellect_opt{
    border:1px solid var(--shadow-color);
    border-radius:10px;
    padding:.6em;
    background-color: var(--content-color);
    width:70%;
    color:var(--coice-color);
}

.input_text{
    width: 70%;
    min-height: 4em;
    border: 1px solid var(--text-input-color);
    border-radius: 15px;
    background: var(--text-input-color);
}


.radio_single {
    border-radius: 6px;
    width: 100%;
    padding: .5em .8em;
    background: linear-gradient(to left, var(--chosen-color) 50%, var(--coice-color) 50%);
    background-size: 200% 100%;
    background-position: right bottom;
    transition: background-position 0.1s ease, background-color 0.1s ease;
}

.radio_single:hover {
    color: white;
    background-position: left bottom;
}


.check_label{
    border-radius: 6px;
    width: 100%;
    padding: .2em;
    background: var(--chosen-color);
    background: linear-gradient(to left, var(--chosen-color) 50%, var(--coice-color) 50%);
    background-size: 200% 100%;
    background-position: right bottom;
    transition: background-position 0.7s ease;
}

.input_text_single{
    width: 100%; 
}


@media (max-width: 768px) {
    .survey_content {
        width: 90vw;
        height: auto;
    }
    .circle {
        width: 25px;
        height: 25px;
        font-size: 0.8em; 
        margin: 2px;
    }
    .input_text, .sellect_opt {
        width: 90%; 
    }
    .navi_button {
        flex-direction: column; 
    }
    .prev_button, .next_button {
        width: 100%;
        margin-bottom: 1em; 
        border-radius: 4px;
    }
}

@media (min-width: 769px) and (max-width: 1024px) {
    .survey_content {
        width: 70vw; 
        height: auto; 
    }
    .circle {
        width: 35px; 
        height: 35px;
        font-size: 0.9em; /* Circle içindeki metni daha küçük yapar */
    }
    .input_text, .sellect_opt {
        width: 80%;
    }
}

@media (min-width: 1025px) and (max-width: 1600px) {
    .survey_content {
        width: 40vw; 
        height: 80vh; 
    }
    .circle {
        width: 36px; 
        height: 36px;
        font-size: 1em; /* Circle içindeki metni uygun boyutta yapar */
    }
    .input_text, .sellect_opt {
        width: 70%;
    }
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
                        c.style.backgroundColor = "var(--coice-color)";
                        c.style.color = "white";
                        c.style.border = "1px solid var(--coice-color)";
                    } else {
                        c.style.backgroundColor = "";
                        c.style.color = "";
                        c.style.border = "1px solid var(--coice-color)"
                    }
                });
                survey_answers.classList.remove("survey_answers_box_radio");
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
            survey_answers.classList.remove("survey_answers_box_radio");
        });
        survey_answers.append(select);
    }else if (questions[currentQuestionIndex].type === 'single_opt') {
        let input_other = null; // input_other'ı dışarıda tanımladık
    
        questions[currentQuestionIndex].options.forEach(option => {
            survey_answers.classList.add("survey_answers_box_radio");
            const radio = document.createElement("div");
            radio.classList.add('radio_single');
            radio.textContent = option;
            
            radio.addEventListener("click", () => {
                answers[questions[currentQuestionIndex].question] = option;
    
                const radios = survey_answers.querySelectorAll(".radio_single");
                radios.forEach(r => {
                    r.style.background = (r.textContent === option) ? "var(--coice-color)" : "var(--chosen-color)";
                    r.style.color = (r.textContent === option) ? "white" : "black";
                });
    
                if (option === "Diğer" && input_other) {
                    input_other.style.display = "flex";
                } else if (input_other) {
                    input_other.style.display = "none";
                }
            });
    
            survey_answers.append(radio);
    
            if (option === "Diğer") {
                input_other = document.createElement("input");
                input_other.classList.add("input_text_single","input_text");
                input_other.style.display = "none";
                input_other.addEventListener("input", () => {
                    answers[questions[currentQuestionIndex].question] = input_other.value;
                });
                survey_answers.append(input_other);
            }
        });
    
    }else if (questions[currentQuestionIndex].type === 'multiple_opt') {
        survey_answers.classList.add("survey_answers_box_radio");
        questions[currentQuestionIndex].options.forEach(option => {
            
            const radio_multi = document.createElement("div");
            radio_multi.classList.add('radio_single');
            radio_multi.textContent = option;
            
            
    
            radio_multi.addEventListener("click", () => {
                if (!answers[questions[currentQuestionIndex].question]) {
                    answers[questions[currentQuestionIndex].question] = [];
                }
                const index = answers[questions[currentQuestionIndex].question].indexOf(option);
                if (index === -1) {
                    answers[questions[currentQuestionIndex].question].push(option);
                    radio_multi.style.background = "var(--coice-color)";
                    radio_multi.style.color = "white";
                } else {
                    answers[questions[currentQuestionIndex].question].splice(index, 1);
                    radio_multi.style.background = "var(--chosen-color)";
                    radio_multi.style.color = "black";
                }
            });
    
            survey_answers.append(radio_multi);
        });
    

    } else if(questions[currentQuestionIndex].type === 'text'){
        const input_aswer = document.createElement("input");
        input_aswer.classList.add("input_text");
        input_aswer.addEventListener("input", () => {
            answers[questions[currentQuestionIndex].question] = input_aswer.value;
        });

        survey_answers.classList.remove("survey_answers_box_radio");
        survey_answers.append(input_aswer);
    }


    prev_button.disabled = currentQuestionIndex === 0;

    if (currentQuestionIndex === questions.length - 1) {
        buttonText.textContent = "Gönder";
        buttonIcon.textContent = "✓"
        
        next_button.addEventListener("click", () => {
            prev_button.disabled = true;
        })
        
    } else {
        buttonText.textContent = "Sonraki";
        buttonIcon.textContent = "→"
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


