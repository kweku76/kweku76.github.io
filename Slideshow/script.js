const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');
const container = document.querySelector('.images');


let counter = 0;

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

function nextSlide() {
  container.animate([{ //reusable animation snippet - fade
    opacity: '0'
  }, {
    opacity: '1.0'
  }], {
    duration: 700,
    fill: 'forwards'
  });
  if (counter === 5) {
    counter = -1;
  }
  counter++;

  container.style.backgroundImage = `url(img/bcg-${counter}.jpeg`;
}

function prevSlide() {
  container.animate([{
    opacity: '0'
  }, {
    opacity: '1.0'
  }], {
    duration: 700,
    fill: 'forwards'
  });
  if (counter === 0) {
    counter = 6;
  }
  counter--;

  container.style.backgroundImage = `url(img/bcg-${counter}.jpeg`;
}