export function create_question(question, content_container) {
    let question_types = {
        type: ["Soru Tipini Seçin", "scale", "score", "single_option", "multiple_option", "text_question"],
    };

    const survey_question_content_area = document.createElement("div");
    survey_question_content_area.classList.add("survey_question_content_area");


    const survey_question_name = document.createElement("div");
    survey_question_name.classList.add("survey_question_name");
    survey_question_name.textContent = question.question1;

    const question_input = document.createElement("input");
    question_input.classList.add("question_input");
    question_input.placeholder = "Soruyu girin";
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
    question_button.append(add_answer,add_question);

    

    content_container.append(survey_question_content_area, question_type,question_button); 
}
