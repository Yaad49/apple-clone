const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.carousel-slide');
const dotsContainer = document.querySelector('.carousel-dots');
let currentIndex = 0;

function showSlide(index) {
  if (index < 0) {
    index = slides.length - 1;
  } else if (index >= slides.length) {
    index = 0;
  }

  carousel.style.transform = `translateX(-${index * 100}%)`;
//   carousel.classList.addClass("active");
  currentIndex = index;

  // Update active dot
  const dots = document.querySelectorAll('.carousel-dot');
  dots.forEach((dot, dotIndex) => {
    dot.classList.toggle('active', dotIndex === currentIndex);
  });
}

// Automatically move to the next slide every 3 seconds
function autoSlide() {
  showSlide(currentIndex + 1);
}

setInterval(autoSlide, 3000); // Adjust the time interval as needed

// Create dots
for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement('div');
    dot.classList.add('carousel-dot');
    dot.addEventListener('click', () => showSlide(i));
    dotsContainer.appendChild(dot);
  }
  
  // Show initial active dot
  showSlide(currentIndex);
  


  let touchStartX = 0;

carousel.addEventListener('touchstart', (e) => {
  touchStartX = e.touches[0].clientX;
});

carousel.addEventListener('touchend', (e) => {
  const touchEndX = e.changedTouches[0].clientX;
  const threshold = 50; // Adjust as needed

  if (touchStartX - touchEndX > threshold) {
    showSlide(currentIndex + 1);
  } else if (touchEndX - touchStartX > threshold) {
    showSlide(currentIndex - 1);
  }
});
