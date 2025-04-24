const image = './ImportantNotice.png';

// path to image file
const modalEL = `
<div class="modal">
  <div class="modal-background"></div>
  <div class="modal-content">
    <p class="image is-4by3">
      <img src="${image}" alt="important notice">
    </p>
  </div>
  <button class="modal-close is-large" aria-label="close"></button>
</div>
`



// append modal to index body
document.querySelector('body').insertAdjacentHTML('beforeend', modalEL)


// open modal function
function openModal() {

  // check if modal is already open, if true, return
  // if (sessionStorage.getItem('modalOpen') === 'true') {
  //   return;
  // }

    // save modal open state to session storage
    sessionStorage.setItem('modalOpen', 'true');


  // activate modal
  document.querySelector('.modal').classList.add('is-active');

  // Optional: close modal on close button click
  document.querySelector('.modal-close').addEventListener('click', () => {
    document.querySelector('.modal').classList.remove('is-active');
  });

  // Optional: close modal when clicking on the background
  document.querySelector('.modal-background').addEventListener('click', () => {
    document.querySelector('.modal').classList.remove('is-active');
  });
}



setTimeout(() => {
  openModal()
}, 1000)