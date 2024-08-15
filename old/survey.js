let q1 = [
    {
        type: "rate",
        question: "Hizmetimizden ne kadar memnun kaldınız?"
    }
];

let q2 = [
    {
        type: "rate",
        question: "Müşteri temsilcisinden ne kadar memnun kaldınız?"
    }
];

let q3 = [
    {
        type: "bool",
        question: "Ürünlerimizden memnun musunuz?"
    }
];

let q4 = [
    {
        type: "bool",
        question: "Fiyatlarımızdan memnun musunuz?"
    }
];

let q5 = [
    {
        type: "text",
        question: "Satın almış olduğunuz ürün hakkındaki görüşleriniz nedir?"
    }
];

let q6 = [
    {
        type: "text",
        question: "Firmamızın tutumu hakkındaki görüşleriniz nelerdir?"
    }
];

let survey_style = document.createElement('style');
survey_style.innerHTML = `
    body {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .survey_content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: 1px solid black;
        height: 90vh;
        width: 80vw;
    }
    .survey_question_content {
        margin-bottom: 20px;
    }
    .text_question {
        margin-bottom: 10px;
    }
    .survey_answer {
        display: block;
        width: 100%;
    }

    .radio_group {
        display: flex;
        gap: 10px;
    }

    .submit_button {
        margin-top: 20px;
        padding: 10px 20px;
        font-size: 16px;
    }
`;
document.head.append(survey_style);

const survey_content = document.createElement("div");
survey_content.classList.add('survey_content');
document.body.append(survey_content);

document.addEventListener('DOMContentLoaded', () => {
    const survey_template = document.querySelector('.survey_content');
    const question_arr = [q1, q2, q3, q4, q5, q6];

    question_arr.forEach(question_set => {
        question_set.forEach(element => {
            let survey_question_content = document.createElement("div");
            survey_question_content.classList.add('survey_question_content');

            let survey_question_text = document.createElement('div');
            survey_question_text.classList.add('text_question');
            survey_question_text.textContent = element.question;

            let survey_answer;

            if (element.type === "rate") {
                survey_answer = document.createElement('input');
                survey_answer.type = 'range';
                survey_answer.min = 1;
                survey_answer.max = 10;
                survey_answer.classList.add('survey_answer');
            } 
            
            else if (element.type === "bool") {
                survey_answer = document.createElement('div');
                survey_answer.classList.add('radio_group');
                
                let yes_label = document.createElement('label');
                yes_label.textContent = "Evet";
                let yes_input = document.createElement('input');
                yes_input.type = 'radio';
                yes_input.name = element.question;
                yes_input.value = "Evet";
                yes_input.classList.add('survey_answer');

                let no_label = document.createElement('label');
                no_label.textContent = "Hayır";
                let no_input = document.createElement('input');
                no_input.type = 'radio';
                no_input.name = element.question;
                no_input.value = "Hayır";
                no_input.classList.add('survey_answer');

                survey_answer.append(yes_label, yes_input, no_label, no_input);
            } 
            
            else if (element.type === "text") {
                survey_answer = document.createElement('input');
                survey_answer.type = 'text';
                survey_answer.classList.add('survey_answer');
            }


            


            survey_question_content.append(survey_question_text, survey_answer);
            survey_template.append(survey_question_content);
        });
    });

    const submit_button = document.createElement('button');
    submit_button.textContent = 'Submit';
    submit_button.classList.add('submit_button');
    survey_template.append(submit_button);


    submit_button.addEventListener('click', () => {
        const survey_answers = document.querySelectorAll('.survey_answer');
        const answers = [];

        survey_answers.forEach(answer => {
            if (answer.type === 'radio' && answer.checked) {
                answers.push({ question: answer.name, answer: answer.value });
            } else if (answer.type === 'range' || answer.type === 'text') {
                answers.push({ question: answer.previousSibling.textContent, answer: answer.value });
            }
        });

        console.log(answers);
    });
});


