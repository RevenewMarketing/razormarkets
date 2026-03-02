const glossaryContainer = document.getElementById("glossary-list");
const alphabetNav = document.querySelectorAll(".alphabet-nav");
const groupedGlossary = {};

function getCurrentTheme() {
    const root = document.documentElement;
    if (!root) return "light";

    const attrTheme = root.getAttribute("data-theme");
    if (attrTheme) return attrTheme;

    const body = document.body;
    if (body && body.classList.contains("dark")) return "dark";
    if (root.classList.contains("dark")) return "dark";

    return "light";
}

function applyGlossaryThemeColors() {
    if (!glossaryContainer) return;

    const theme = getCurrentTheme();
    const termElements = glossaryContainer.querySelectorAll(".glossary-item strong");
    const definitionElements = glossaryContainer.querySelectorAll(".glossary-item .definition");

    if (theme === "dark") {
        termElements.forEach((el) => {
            el.style.color = "#ffffff";
        });
        definitionElements.forEach((el) => {
            el.style.color = "rgba(255, 255, 255, 0.85)";
        });
    } else {
        termElements.forEach((el) => {
            el.style.color = "";
        });
        definitionElements.forEach((el) => {
            el.style.color = "";
        });
    }
}

function initGlossaryThemeObserver() {
    const root = document.documentElement;
    if (!root || typeof MutationObserver === "undefined") return;

    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.type === "attributes" && mutation.attributeName === "data-theme") {
                applyGlossaryThemeColors();
            }
        });
    });

    observer.observe(root, { attributes: true, attributeFilter: ["data-theme"] });
}

glossary.forEach(({ term, definition }) => {
    const firstLetter = term.charAt(0).toUpperCase();
    if (!groupedGlossary[firstLetter]) {
        groupedGlossary[firstLetter] = [];
    }
    groupedGlossary[firstLetter].push({ term, definition });
});

Object.keys(groupedGlossary).sort().forEach((letter, index) => {
    const section = document.createElement("div");
    section.classList.add("glossary-section");
    section.id = `section-${index}`;
    section.innerHTML = `<h3 class="h3" style="color: #00D9A3; margin-bottom: 20px;">${letter}</h3>`;

    groupedGlossary[letter].forEach(({ term, definition }) => {
        const item = document.createElement("div");
        item.classList.add("glossary-item");
        item.style.cssText = "padding: 20px; margin-bottom: 15px; background: rgba(0, 217, 163, 0.05); border: 1px solid rgba(0, 217, 163, 0.2); border-radius: 12px; cursor: pointer; transition: all 0.3s ease;";
        item.innerHTML = `
            <strong style="color: #fff; font-size: 1.2em; display: block; margin-bottom: 10px;">${term}</strong>
            <div class='definition' style='display: none; color: rgba(255, 255, 255, 0.8); line-height: 1.6; padding-top: 10px; border-top: 1px solid rgba(0, 217, 163, 0.1);'>${definition}</div>
        `;
      
        item.addEventListener("click", (e) => {
            e.stopPropagation();
            const definitionElement = item.querySelector(".definition");
            const isVisible = definitionElement.style.display === "block";
            definitionElement.style.display = isVisible ? "none" : "block";
            item.style.background = isVisible ? "rgba(0, 217, 163, 0.05)" : "rgba(0, 217, 163, 0.1)";
        });
        
        item.addEventListener("mouseenter", () => {
            if (item.querySelector(".definition").style.display !== "block") {
                item.style.background = "rgba(0, 217, 163, 0.08)";
            }
        });
        
        item.addEventListener("mouseleave", () => {
            if (item.querySelector(".definition").style.display !== "block") {
                item.style.background = "rgba(0, 217, 163, 0.05)";
            }
        });
        
        section.appendChild(item);
    });

    glossaryContainer.appendChild(section);
});
applyGlossaryThemeColors();
initGlossaryThemeObserver();

function createNavLink(letter, index) {
    const link = document.createElement("a");
    link.textContent = letter;
    link.style.cssText = "padding: 8px 12px; color: #00D9A3; text-decoration: none; border-radius: 6px; transition: all 0.3s ease; cursor: pointer;";

    link.addEventListener("mouseenter", () => {
        link.style.background = "rgba(0, 217, 163, 0.2)";
    });
    
    link.addEventListener("mouseleave", () => {
        link.style.background = "transparent";
    });

    link.addEventListener("click", (e) => {
        e.preventDefault();
    
        const section = document.getElementById(`section-${index}`);
        if (!section) return;
    
        const rect = section.getBoundingClientRect();
        const scrollY = window.scrollY || window.pageYOffset;
        const adjust = 170;
        const targetY = scrollY + rect.top;

        if (window.innerWidth < 332) {
            window.scrollTo({
                top: Math.floor(targetY - (adjust + 150)),
                behavior: "smooth"
            });
        } else if (window.innerWidth < 432) {
            window.scrollTo({
                top: Math.floor(targetY - (adjust + 110)),
                behavior: "smooth"
            });
        } else if (window.innerWidth < 581) {
            window.scrollTo({
                top: Math.floor(targetY - (adjust + 70)),
                behavior: "smooth"
            });
        } else if (window.innerWidth < 1132) {
            window.scrollTo({
                top: Math.floor(targetY - (adjust + 30)),
                behavior: "smooth"
            });
        } else {
            window.scrollTo({
                top: Math.floor(targetY - adjust),
                behavior: "smooth"
            });
        }
    });

    return link;
}

Object.keys(groupedGlossary).sort().forEach((letter, index) => {
    const link1 = createNavLink(letter, index);
    const link2 = createNavLink(letter, index);

    alphabetNav[0].appendChild(link1);
    if (alphabetNav[1]) {
        alphabetNav[1].appendChild(link2);
    }
});

window.addEventListener("scroll", () => {
    const scrollAlphabet = document.querySelector(".scroll-alphabet");
    const innerAlphabet = document.querySelector(".inner-alphabet");
    
    if (window.scrollY > 460) {
        if (scrollAlphabet) scrollAlphabet.style.display = "flex";
        if (innerAlphabet) innerAlphabet.style.opacity = "0";
    } else if (window.scrollY < 460) {
        if (scrollAlphabet) scrollAlphabet.style.display = "none";
        if (innerAlphabet) innerAlphabet.style.opacity = "1";
    }
});
