//faqFunction.js


const faqContainer = document.getElementById("faq-container");

faqs.forEach((faq, index) => {
    const accordion = document.createElement("div");
    accordion.classList.add("faq-item");

    const header = document.createElement("div");
    header.classList.add("faq-header");

    const headerText = document.createElement("span");
    headerText.textContent = faq.question;

    header.appendChild(headerText); // No icon span added

    const panel = document.createElement("div");
    panel.classList.add("faq-answer");
    panel.innerHTML = `<p>${faq.answer}</p>`;

    accordion.appendChild(header);
    accordion.appendChild(panel);
    faqContainer.appendChild(accordion);

    header.addEventListener("click", () => {
        const activeItem = document.querySelector(".faq-item.active");
        if (activeItem && activeItem !== accordion) {
            activeItem.classList.remove("active");
            activeItem.querySelector(".faq-answer").style.display = "none";
        }

        accordion.classList.toggle("active");
        panel.style.display = panel.style.display === "block" ? "none" : "block";
    });

    // Open the first accordion by default
    if (index === 0) {
        accordion.classList.add("active");
        panel.style.display = "block";
    }
});