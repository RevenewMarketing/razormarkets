

// Adds the back to top button to all the page
function backToTopButton() {

  // Select the Back to Top button
  const backToTopButton = document.querySelector('.back-to-top');

  // Function to toggle the visibility of the button
  function toggleBackToTopButton() {
    // Check the vertical scroll position
    if (window.scrollY > 200) { // If scrolled more than 200px


      backToTopButton.classList.add('show-btt'); // Show the button
    } else {
      backToTopButton.classList.remove('show-btt'); // Hide the button
    }
  }

  window.addEventListener('scroll', toggleBackToTopButton);


  // Select all elements with the class 'navbar-burger'
  const navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if (navbarBurgers.length > 0) {
    // Add a click event on each of them
    navbarBurgers.forEach(burger => {
      burger.addEventListener('click', () => {
        // Get the target from the 'data-target' attribute
        const target = burger.dataset.target;
        const targetElement = document.getElementById(target);

        // Toggle the 'is-active' class on both the navbar-burger and the navbar-menu
        burger.classList.toggle('is-active');
        targetElement.classList.toggle('is-active');
      });
    });
  }

}

document.addEventListener('DOMContentLoaded', function() {
  const dropdownTriggers = document.querySelectorAll('.navbar-item.has-dropdown');

  dropdownTriggers.forEach(function(trigger) {
    trigger.addEventListener('mouseover', function(event) {
      // Prevent default click behavior if needed (e.g., if the trigger is a link)
      // event.preventDefault();

      // Toggle the 'is-active' class
      this.classList.toggle('is-active');

      //Close other opened dropdowns.
      dropdownTriggers.forEach(function(otherTrigger){
        if(otherTrigger !== trigger && otherTrigger.classList.contains('is-active')){
          otherTrigger.classList.remove('is-active');
        }
      });
    });
  });
});

// Adds the disclaimer text to the disclaimer element on all pages
function disclaimer() {
  const disclaimerEl = document.querySelector('.disclaimer');

  disclaimerEl.innerHTML = `<b>Disclaimer:</b> Razor Markets (Pty) Ltd (registration number 2024/605719/07) is a duly appointed Juristic Representative of Sithundhi Group (Pty) Ltd, a company duly incorporated under the laws of South Africa with registration number 2021/817017/07 and regulated by the Financial Sector Conduct Authority (FSCA) under FSP No. 52030. The trading platform provided by Razor Markets enables Clients to engage in derivative trading, offering products issued by RocketX (Pty) Ltd. RocketX (Pty) Ltd, a company duly incorporated under South African law with registration number 2020/824856/07, operates as a licensed Financial Services Provider (FSP) and authorized Over-the-Counter Derivatives Provider (ODP), holding FSCA license number 52142. RocketX (Pty) Ltd is headquartered at Flexisuites, 141 Corobay Avenue, Menlyn, Gauteng 0181 . In all Contracts for Difference (CFDs) entered into by you (the Client) on the Razor Markets platform, RocketX (Pty) Ltd serves as the designated Counter Party and Principal, assuming full counterparty risk in accordance with regulatory obligations. By using Razor Markets’ services, you acknowledge and agree to be bound by the Client Agreement, a legally binding contract between you (the Client) and RocketX (Pty) Ltd. Razor Markets does not offer services to US investors or any other jurisdiction where such distribution or use would be contrary to local law or regulation.`
}


// Call functions
backToTopButton()
disclaimer()


window.addEventListener('scroll', () => {
  const nav = document.querySelector('.navbar');
  const dropdown = document.querySelectorAll('.navbar-dropdown');

  if (window.scrollY > 200) {
  
    // Add a solid background color
    nav.style.backgroundColor = '#30313A'; // Solid color
    dropdown.forEach(drop => {
      drop.style.backgroundColor = '#30313A'; // Solid color for dropdown
    });
   
  } else {
    // Revert to the original transparent background
    nav.style.backgroundColor = '#30313a91'; // Original color
    dropdown.forEach(drop => {
      drop.style.backgroundColor = '#30313a91'; // Transparent for dropdown
    });
  }
});