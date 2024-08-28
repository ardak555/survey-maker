export function last_page(content_container){

    const header_container = document.createElement("div");
    header_container.classList.add("header_container");
    header_container.textContent = "Anketi Başarı İle Oluşturdunuz";

    const start_container = document.createElement("div");
    start_container.classList.add("start_container");
    start_container.textContent = "✓";

    content_container.append(header_container, start_container);
}