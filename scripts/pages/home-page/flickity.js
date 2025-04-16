const carouselElement = document.querySelector('.carousel');
const carouselDataset = carouselElement.dataset;

// 1. Parse and modify
const flickityOptions = JSON.parse(carouselDataset.flickity);


function updateGroupCells() {
    const isMobile = window.innerWidth < 768; // Your mobile breakpoint

    flickityOptions.groupCells = isMobile ? 1 : 2;

    // 2. Stringify and update
    carouselDataset.flickity = JSON.stringify(flickityOptions);

  }
  
  // Initial check
  updateGroupCells();