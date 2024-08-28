import { last_page } from "./last_page.js";
export function show_question(content_container, questionsArray) {
    const survey_all_question_page = document.createElement("div");
    survey_all_question_page.classList.add("survey_all_question_page");

    const all_question_header = document.createElement("div");
    all_question_header.classList.add("all_question_header");
    all_question_header.textContent = "Tüm Sorular";

    const all_question_list = document.createElement("div");
    all_question_list.classList.add("all_question_list");

    questionsArray.forEach((question, index) => {
        const all_question_list_order = document.createElement("div");
        all_question_list_order.classList.add("all_question_list_order");
    
        const all_question_list_dropdown = document.createElement("div");
        all_question_list_dropdown.classList.add("all_question_list_dropdown");
    
        const dropdown_button = document.createElement("div");
        dropdown_button.classList.add("dropdown_button");
    
        const dropdown_button_header = document.createElement("div");
        dropdown_button_header.classList.add("dropdown_button_header");
        dropdown_button_header.textContent = `Soru ${index + 1}`;
    
        const dropdown_button_icon = document.createElement("div");
        dropdown_button_icon.classList.add("dropdown_button_icon");
    
        const open_arrow = document.createElement("div");
        open_arrow.classList.add("open_arrow");
    
        const open_arrow_img = document.createElement("img");
        open_arrow_img.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAv0lEQVR4nO3XSwqDMBRG4bOJG3T/O2lHfU3qoMtpETIQKSVqHjf0PyA48ML9zCiglFJKKaXUP3cC7kDAXwF4AOeUj6/AG5icYULcad7tkjJgwDMOvICx/I6bdxr2Do49Ijxh7CjCA8ZyIVpiLDeiBcZKIWpirDSiBqYaoiSmOqIEphkiJ6Y5IgfGDeIIxh1iD8YtYgvGPSIF0w3iF6Y7xLfb3LR693TrTGp5Ct2dxLr579/i091JKKWUUkophcs+GiV0FcyNP/cAAAAASUVORK5CYII=";
    
        open_arrow.appendChild(open_arrow_img);
    
        const close_arrow = document.createElement("div");
        close_arrow.classList.add("close_arrow");
    
        const close_arrow_img = document.createElement("img");
        close_arrow_img.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAuklEQVR4nO3XWwrCMBBG4bOJCXb/WxEE65N96HKUQgoiKtXmMoP/gUAIhOQjTwGllFJKKaVUmRJwBMY8D5kBV+CWxwwMBCsBUwZMT/MU8SVm4PBibYiIWAuDsQ+IMBjbgHCPsS8QbjH2A8IdxnYg3GCsAKI7xgoiumGsAqI5xioimmGsAeLdWUNERDVMD0RxTE9EMYwHxG6MJ8QuzOj0N5cefprnLRtOwMUZYi3luy13VEoppZRS6k+7A5pSdBk89UVrAAAAAElFTkSuQmCC";
    
        close_arrow.appendChild(close_arrow_img);
    
        dropdown_button_icon.append(open_arrow, close_arrow);
    
        dropdown_button.append(dropdown_button_header, dropdown_button_icon);
    
        const dropdown_content = document.createElement("div");
        dropdown_content.classList.add("dropdown_content");
    
        const question_info = document.createElement("div");
        question_info.classList.add("question_info");
        question_info.textContent = `Soru: ${question.questionText}`;
    
        const question_type_info = document.createElement("div");
        question_type_info.classList.add("question_type_info");
        question_type_info.textContent = `Soru Tipi: ${question.questionType}`;
    
        dropdown_content.append(question_info, question_type_info);
    
        // answer_item'ları gruplamak için yeni bir div katmanı ekliyoruz
        const answer_item_group = document.createElement("div");
        answer_item_group.classList.add("answer_item_group");
    
        question.answers.forEach((answer, idx) => {
            const answer_item = document.createElement("div");
            answer_item.classList.add("answer_item");
            answer_item.textContent = `Cevap ${idx + 1}: ${answer}`;
            answer_item_group.appendChild(answer_item);
        });
    
        dropdown_content.appendChild(answer_item_group);
    
        all_question_list_dropdown.append(dropdown_button, dropdown_content);
    
        all_question_list_order.append(all_question_list_dropdown);
        all_question_list.appendChild(all_question_list_order);
    
        close_arrow.addEventListener('click', function() {
            dropdown_content.style.display = 'none';
            close_arrow.style.display = 'none';
            open_arrow.style.display = 'flex';
        });
    
        open_arrow.addEventListener('click', function() {
            dropdown_content.style.display = 'block';
            open_arrow.style.display = 'none';
            close_arrow.style.display = 'flex';
        });
    
        dropdown_content.style.display = 'none';
    });

    const navigate_button = document.createElement("div");
    navigate_button.classList.add("navigate_button");

    const next_button = document.createElement("div");
    next_button.classList.add("next_button");
    next_button.textContent = "İleri";

    const prev_button = document.createElement("div");
    prev_button.classList.add("prev_button");
    prev_button.textContent = "Geri";

    navigate_button.append(prev_button, next_button);

    next_button.addEventListener('click', function(){
        content_container.innerHTML = "";
        last_page(content_container);
        content_container.classList.remove("show_question_content_container");
        content_container.classList.add("content_container");
    })

    survey_all_question_page.append( all_question_list, navigate_button);
    content_container.append(all_question_header, survey_all_question_page);
}
