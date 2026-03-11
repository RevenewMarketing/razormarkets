// faqFunction.js

const faqContainer = document.getElementById("faq-container");

// Get the current page's path
const currentPage = window.location.pathname;

function getCurrentTheme() {
    const root = document.documentElement;
    const body = document.body;

    if (root.getAttribute("data-theme")) return root.getAttribute("data-theme");
    if (body && body.getAttribute("data-theme")) return body.getAttribute("data-theme");

    if (root.classList.contains("dark") || (body && body.classList.contains("dark"))) {
        return "dark";
    }

    return "light";
}

function applyFaqThemeColors() {
    if (!faqContainer) return;

    const theme = getCurrentTheme();
    const categoryHeadings = faqContainer.querySelectorAll(".category-heading");
    const questionSpans = faqContainer.querySelectorAll(".faq-header span");
    const answers = faqContainer.querySelectorAll(".faq-answer");

    if (theme === "light") {
        categoryHeadings.forEach((el) => {
            el.style.color = "#2d2a26";
        });
        questionSpans.forEach((el) => {
            el.style.color = "#2d2a26";
        });
        answers.forEach((el) => {
            el.style.color = "#4b4336";
        });
    } else {
        categoryHeadings.forEach((el) => {
            el.style.color = "";
        });
        questionSpans.forEach((el) => {
            el.style.color = "";
        });
        answers.forEach((el) => {
            el.style.color = "";
        });
    }
}

function initFaqThemeObserver() {
    const root = document.documentElement;
    if (!root || !window.MutationObserver) return;

    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.type === "attributes" && mutation.attributeName === "data-theme") {
                applyFaqThemeColors();
            }
        });
    });

    observer.observe(root, { attributes: true, attributeFilter: ["data-theme"] });
}

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
            panel.innerHTML = `<div>${faq.answer}</div>`;

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

    applyFaqThemeColors();
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
            panel.innerHTML = `<div>${faq.answer}</div>`;

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

    applyFaqThemeColors();
}

// Check the current page and render FAQs accordingly
document.addEventListener("DOMContentLoaded", function() {
    if (currentPage.includes("index.html") || currentPage === "/") { // Adjust the condition based on your homepage URL
        renderGeneralEnquiries();
    } else if (currentPage.includes("FAQ")) { // Adjust the condition based on your FAQs page URL
        renderAllFAQs();
    } else {
        // Handle other pages or a default case if needed
        console.log("Not on homepage or FAQs page.");
    }

    initFaqThemeObserver();
});