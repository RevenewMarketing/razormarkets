const section1 = {
  heading: 'Choose Your Trading Edge',
  subheading: 'At Razor Markets, we understand that no two traders are the same. That’s why we offer a range of account options tailored to your trading goals, whether you’re just starting out or looking to maximize your potential.',
  button1: 'Learn More',
  button2: 'Sign Up'
}

// These button links are added in button-links.js


// ========= DO NOT EDIT BELOW THIS LINE =========

// Section 1
const heading = document.querySelector('.account-types-content > h1')
const subheading = document.querySelector('.account-types-content > p')
const button1 = document.querySelector('.account-types-content > .buttons > button ')
const button2 = document.querySelector('.account-types-content > .buttons > button:last-child')

if (heading) {
  heading.textContent = section1.heading;
}

if (subheading) {
  subheading.textContent = section1.subheading;
}

if (button1) {
  button1.textContent = section1.button1;
}

if (button2) {
  button2.textContent = section1.button2;
}
