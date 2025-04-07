// faqFunction.js

const faqContainer = document.getElementById("faq-container");

// Get the current page's path
const currentPage = window.location.pathname;

// Function to render all FAQs
function renderAllFAQs() {
    faqs.forEach((category) => {
        const categoryTitle = document.createElement("h2");
        categoryTitle.textContent = category.category;
        categoryTitle.classList.add("category-heading");
        faqContainer.appendChild(categoryTitle);

        category.items.forEach((faq, index) => {
            const accordion = document.createElement("div");
            accordion.classList.add("faq-item");

            const header = document.createElement("div");
            header.classList.add("faq-header");

            const headerText = document.createElement("span");
            headerText.textContent = faq.question;

            header.appendChild(headerText);

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

            // Open the first accordion in the category by default
            if (index === 0) {
                accordion.classList.add("active");
                panel.style.display = "block";
            }
        });
    });
}

// Function to render only the "General Queries" category
function renderGeneralEnquiries() {
    const generalEnquiriesCategory = faqs.find(category => category.category === "General Queries"); // Or use category.id === "general" if you used IDs

    if (generalEnquiriesCategory) {
        const categoryTitle = document.createElement("h2");
        categoryTitle.textContent = generalEnquiriesCategory.category;
        categoryTitle.classList.add("category-heading");
        faqContainer.appendChild(categoryTitle);

        generalEnquiriesCategory.items.forEach((faq, index) => {
            const accordion = document.createElement("div");
            accordion.classList.add("faq-item");

            const header = document.createElement("div");
            header.classList.add("faq-header");

            const headerText = document.createElement("span");
            headerText.textContent = faq.question;

            header.appendChild(headerText);

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

            // Open the first accordion in the category by default
            if (index === 0) {
                accordion.classList.add("active");
                panel.style.display = "block";
            }
        });
    }
}

// Check the current page and render FAQs accordingly
if (currentPage.includes("index.html") || currentPage === "/") { // Adjust the condition based on your homepage URL
    renderGeneralEnquiries();
} else if (currentPage.includes("faqs")) { // Adjust the condition based on your FAQs page URL
    renderAllFAQs();
} else {
    // Handle other pages or a default case if needed
    console.log("Not on homepage or FAQs page.");
}