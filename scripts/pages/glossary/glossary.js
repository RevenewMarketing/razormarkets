// const glossary = [
//     { term: "Ask Price", definition: "The price at which a trader can buy a currency pair. It is the higher of the two prices in a quote." },
//     { term: "Base Currency", definition: "The first currency in a currency pair, against which the value of the second currency is determined." },
//     { term: "Bid Price", definition: "The price at which a trader can sell a currency pair. It is the lower of the two prices in a quote." },
//     { term: "Broker", definition: "A company that provides traders with access to the Forex market by executing buy and sell orders." },
//     { term: "Bull Market", definition: "A market condition where prices are rising or expected to rise." },
//     { term: "Bear Market", definition: "A market condition where prices are falling or expected to fall." },
//     { term: "Leverage", definition: "The ability to control a large position with a small amount of capital, expressed as a ratio (e.g., 1:100)." },
//     { term: "Pip", definition: "The smallest price movement in Forex, usually the fourth decimal place in most currency pairs (0.0001)." },
//     { term: "Spread", definition: "The difference between the bid and ask price of a currency pair, representing the broker’s commission." },
//     { term: "Trend", definition: "The general direction in which a currency pair’s price is moving (upward, downward, or sideways)." }
// ];

const glossaryContainer = document.getElementById("glossary-list");
const alphabetNav = document.querySelectorAll(".alphabet-nav");
const groupedGlossary = {};

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
    section.innerHTML = `<h3>${letter}</h3>`;


    groupedGlossary[letter].forEach(({ term, definition }) => {
        const item = document.createElement("div");
        item.classList.add("glossary-item");
        item.innerHTML = `<strong>${term}</strong><div class='definition' style='display: none;'>${definition}</div>`;
      
        item.addEventListener("click", (e) => {
            e.stopPropagation();
            const definitionElement = item.querySelector(".definition");
            definitionElement.style.display = definitionElement.style.display === "none" ? "block" : "none";
        });
        section.appendChild(item);
    });

    glossaryContainer.appendChild(section);
});

function createNavLink(letter, index) {
    const link = document.createElement("a");
    link.textContent = letter;

    link.addEventListener("click", (e) => {
        e.preventDefault();
    
        const section = document.getElementById(`section-${index}`);
        if (!section) return;
    
        const rect = section.getBoundingClientRect(); // position relative to viewport
        //console.log('rect', rect)
        const scrollY = window.scrollY || window.pageYOffset; // current scroll position
        // console.log('scrollY', scrollY)
        const adjust = 170; // this will reposition the element to the top of the viewport
        // console.log('adjust', adjust)
        const targetY = scrollY + rect.top ; // scroll so the element is at the top of the viewport
        //console.log('targetY', targetY)
        // console.log('targetY - adjust', (targetY - adjust).toFixed(0))
        // console.log('Math.max(targetY - adjust, 0)', Math.max(targetY - adjust, 0))

        window.scrollTo({
            top:(targetY - adjust).toFixed(0),
      
           
            behavior: "smooth"
        });
    });

    return link;
}


Object.keys(groupedGlossary).sort().forEach((letter, index) => {
    const link1 = createNavLink(letter, index);
    const link2 = createNavLink(letter, index); // brand new with listener

    alphabetNav[0].appendChild(link1);
    alphabetNav[1].appendChild(link2);
});

//log the scroll position
window.addEventListener("scroll", () => {

    if (window.scrollY > 460) {
        document.querySelector(".scroll-alphabet").style.display = "flex";
        document.querySelector(".inner-alphabet").style.opacity = "0";
    }else if (window.scrollY < 460) {
        document.querySelector(".scroll-alphabet").style.display = "none";
        document.querySelector(".inner-alphabet").style.opacity = "1";
    }
});