  // Burger toggle
  document.querySelectorAll('.navbar-burger').forEach(burger => {
    
    burger.addEventListener('click', () => {
      const target = burger.dataset.target;
      const menu = document.getElementById(target);

      burger.classList.toggle('is-active');
      menu.classList.toggle('is-active');
    });
  });

  // Mobile dropdown toggle
  function bindMobileDropdowns() {
    const isMobile = window.innerWidth <= 1023;
    const dropdowns = document.querySelectorAll('.navbar-item.has-dropdown');

    dropdowns.forEach(dropdown => {
      const link = dropdown.querySelector('.navbar-link');

      // Remove previous listeners
      link.replaceWith(link.cloneNode(true));
    });

    if (isMobile) {
      document.querySelectorAll('.navbar-item.has-dropdown .navbar-link').forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          const parent = e.target.closest('.has-dropdown');
          parent.classList.toggle('is-active');
        });
      });
    }
  }

  // On load and resize
  window.addEventListener('DOMContentLoaded', bindMobileDropdowns);
  window.addEventListener('resize', bindMobileDropdowns);


// changes nav background color on scroll
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

