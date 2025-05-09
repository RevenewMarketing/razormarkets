// const image = '../assets/about-page/Untitled-2.jpg';

// path to image file
const modalEL = `
<div class="modal">
  <div class="modal-background"></div>
  <div class="modal-content">
    <figure class="image is-4by3">
      <img src="${image}" alt="important notice">
      <button class="modal-close is-large is-overlay" aria-label="close"></button>
    </figure>
  </div>
</div>
`;

// append modal to index body
document.querySelector('body').insertAdjacentHTML('beforeend', modalEL);

// open modal function
function openModal() {

    // check if modal is already open, if true, return
  if (sessionStorage.getItem('modalOpen') === 'true') {
    return;
  }

    // save modal open state to session storage
    sessionStorage.setItem('modalOpen', 'true');
  // activate modal
  document.querySelector('.modal').classList.add('is-active');

  // Optional: close modal on close button click
  const closeModalButton = document.querySelector('.modal-close');
  if (closeModalButton) {
    closeModalButton.addEventListener('click', () => {
      document.querySelector('.modal').classList.remove('is-active');
    });
  }

  // Optional: close modal when clicking on the background
  const modalBackground = document.querySelector('.modal-background');
  if (modalBackground) {
    modalBackground.addEventListener('click', () => {
      document.querySelector('.modal').classList.remove('is-active');
    });
  }
}

// Open the modal after a short delay (adjust as needed)
setTimeout(() => {
  openModal();
}, 1000);