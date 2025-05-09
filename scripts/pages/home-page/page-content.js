
const section1 = {
  heading: 'Make Wise Trades, Enjoy Quick Withdrawals!',
  subheading: 'Precision, speed, and trust—everything you need to dominate the markets. Razor Markets delivers a trading experience that’s sharp, reliable, and built for success.',
}

// Cards
const section3 = [
  {
    title: 'Fast Withdrawals',
    description: 'Quick and seamless withdrawals to keep you trading without interruptions, ensuring easy access to your funds.',
    image: '../../../assets/home-page/fast-withdrawals.webp'
  },
  {
    title: 'Advanced Tools',
    description: 'User-friendly platforms equipped with cutting-edge analytics to support informed and efficient trading decisions.',
      image: '../../../assets/home-page/Advanced-tools.webp'
  },
  {
    title: 'Tailored Accounts',
    description: 'A variety of flexible account options crafted to suit and complement your unique trading style and needs.',
     image: '../../../assets/home-page/tailored-accounts-razor.webp'
  },
  // Add more card objects as needed
]

const section4 = {
  heading: 'Precision Trading, Razor Sharp Results',
  subheading: 'At Razor Markets, we redefine trading by combining lightning-fast withdrawals, innovative tools, and unparalleled transparency. Whether you’re new to trading or a seasoned pro, we’ve got everything you need to succeed.',
}

// Cards
const section6 = {
  heading: 'Why choose Razor Markets',
  cards: [
    {
      icon: "../../../assets/svg/screen-share.svg",
      title: 'Cutting-Edge Tools',
      description: 'Trade smarter with innovative tools tailored for precision and efficiency, empowering your every move.',
      buttonText: 'Sign Up'
    },
    {
      icon: "../../../assets/svg/market-stat.svg",
      title: 'Competitive Spreads & Fees',
      description: 'Enjoy low-cost trading with competitive spreads and fees designed to maximize your gains.',
      buttonText: 'Sign Up'
    },
    {
      icon: "../../../assets/svg/plus.svg",
      title: 'Trusted & Secure',
      description: 'Rely on a platform built for trust, ensuring your funds and data remain secure at all times.',
      buttonText: 'Sign Up'
    },
    // Add more card objects as needed
  ]
}











// ============== DO NOT EDIT BELOW THIS LINE =============================

// Add the content to the page - section 1
const section1H1 = document.querySelector('.section-1 > h1').textContent = section1.heading;
const section1p = document.querySelector('.section-1 > p').textContent = section1.subheading;

// Cards
const section3CTAs = document.querySelector('.features').innerHTML = `
  ${section3.map(item => `
    
    <div class="feature-card" style="background-image: url(${item.image}); background-size: cover" >
      <div class="overlay-section">
        <h2>${item.title}</h2>
        <p>${item.description}</p>
        <button class="button is-info signup" class="button">Sign Up</button>
      </div>
    </div>

  `).join('')}
`;

//section 4
document.querySelector('.hero-image-text-content > h2').textContent = section4.heading;
document.querySelector('.hero-image-text-content > p').textContent = section4.subheading


// section 6
const section6HeadingElement = document.querySelector('.section-6 > h1');
if (section6HeadingElement) {
  section6HeadingElement.innerHTML = section6.heading;
}
console.log('section6.heading', section6.heading)


// document.querySelector('.section-6 > .features').innerHTML = `
//   ${section6.cards.map(item => `
//     <div class="card-bg">
//       <div class="feature-card">
//         <img src="${item.icon}" alt="feature1">
//         <h2>${item.title}</h2>
//         <p>${item.description}</p>
//         <button class="button is-info signup" class="button">${item.buttonText}</button>
//       </div>
//     </div>
//   `).join('')}
// `;



window.addEventListener('load', () => {
  // Target all H1 headings
  const allHeadings = document.querySelectorAll('h1');

  // Iterate through each heading and apply the animation
  allHeadings.forEach((heading, i) => {
    // Get the text content and split into an array of words
    const words = heading.textContent.split(' '); // Split by spaces
    heading.textContent = ''; // Clear the text content

    // Combine the first two words into a single line, and keep the rest
    const firstLine = i === 0 ? words.slice(0, 3).join(' ') : words.slice(0, 2).join(' '); // First two words
    const remainingText = i === 0 ? words.slice(3).join(' ') : words.slice(2).join(' '); // Remaining words
    
    // Create spans for the first line
    firstLine.split('').forEach(char => {
      const span = document.createElement('span');
      span.textContent = char === ' ' ? '\u00A0' : char; // Preserve spaces
      heading.appendChild(span);
    });

    // Add a line break
    heading.appendChild(document.createElement('br'));

    // Create spans for the remaining text
    remainingText.split('').forEach(char => {
      const span = document.createElement('span');
      span.textContent = char === ' ' ? '\u00A0' : char; // Preserve spaces
      heading.appendChild(span);
    });

    // Animate each span with GSAP and ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      heading.querySelectorAll('span'),
      { opacity: 0, y: 20 }, // Starting state
      {
        opacity: 1,
        y: 0,
        duration: 2, // Animation duration
        ease: 'power3.out',
        stagger: 0.05, // Delay between each letter
        scrollTrigger: {
          trigger: heading, // The heading element
          start: 'top 90%', // Animation starts when heading is 80% in the viewport
          toggleActions: 'play none none reverse', // Play when entering, reverse when leaving
        },
      }
    );
  });
});
