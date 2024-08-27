export function show_question(content_container) {
    const survey_all_question_page = document.createElement("div");
    survey_all_question_page.classList.add("survey_all_question_page");

    const all_question_header = document.createElement("div");
    all_question_header.classList.add("all_question_header");
    all_question_header.textContent  = "Tüm Sorular";


    const all_question_list = document.createElement("div");
    all_question_list.classList.add("all_question_list");

    const all_question_list_order = document.createElement("div");
    all_question_list_order.classList.add("all_question_list_order");

    all_question_list.appendChild(all_question_list_order);


    const all_question_list_dropdown = document.createElement("div");
    all_question_list_dropdown.classList.add("all_question_list_dropdown");

    const dropdown_button = document.createElement("div");
    dropdown_button.classList.add("dropdown_button");

    const dropdown_button_header = document.createElement("div");
    dropdown_button_header.classList("dropdown_button_header");
    dropdown_button_header.textContent = `Soru`;

    const dropdown_button_icon = document.createElement("div")
    dropdown_button_icon.classList.add(dropdown_button_icon);

    const open_arrow = document.createElement("div");
    open_arrow.classList.add("open_arrow");

    const open_arrow_img = document.createElement("img");
    open_arrow_img.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAiklEQVR4nM3VuwrCQBAF0LM2luIf+Cj8zHQhvQRrvyqFjQ/0N5SAhQRszA04MO1hlp29y/daYiFUOzxwwzYBdni++4rNWLD6APu+YD0WrQdoZNImPWnBfgq0nQI9DNAzVmPQGY4D9IT5X4AleeSSvJSSXpsmidXJp1elF7lLh0IfsPdkwPb10xfwAu4jS67YkH3sAAAAAElFTkSuQmCC";

    open_arrow.appendChild(open_arrow_img);

    const close_arrow = document.createElement("div");
    close_arrow.classList.add("close_arrow");

    const close_arrow_img = document.createElement("img");
    close_arrow_img.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAiklEQVR4nM3VuwrCQBAF0LM2luIf+Cj8zHQhvQRrvyqFjQ/0N5SAhQRszA04MO1hlp29y/daYiFUOzxwwzYBdni++4rNWLD6APu+YD0WrQdoZNImPWnBfgq0nQI9DNAzVmPQGY4D9IT5X4AleeSSvJSSXpsmidXJp1elF7lLh0IfsPdkwPb10xfwAu4jS67YkH3sAAAAAElFTkSuQmCC";

    close_arrow.appendChild(close_arrow_img);

    dropdown_button_icon.append(open_arrow,close_arrow);

    dropdown_button.append(dropdown_button_header,dropdown_button_icon)

    const dropdown_content = document.createElement("div");
    dropdown_content.classList.add("dropdown_content");

    all_question_list_dropdown.append(dropdown_button, dropdown_content)

    all_question_list_order.append(all_question_list_dropdown);


    const navigate_button = document.createElement("div");
    navigate_button.classList.add("navigate_button");

    const next_button = document.createElement("div");
    next_button.classList.add("next_button");
    next_button.textContent = "İleri";

    const prev_button = document.createElement("div");
    prev_button.classList.add("prev_button");
    prev_button.textContent = "Geri";

    navigate_button.append(prev_button, next_button);

    survey_all_question_page.append(all_question_header,all_question_list, navigate_button);
    content_container.append(survey_all_question_page);
}
