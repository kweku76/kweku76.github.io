let counter = document.querySelector('.counter');
const addCount = document.querySelector('#addCountBtn');
const lowerCount = document.querySelector('#lowerCountBtn');

let count = 0; // start number at 0

addCount.addEventListener('click', incrementCounter);
lowerCount.addEventListener('click', decrementCounter);
// two event listeners for the add button and decrease button when clicked, the following functions run.


function incrementCounter() { //function to increase number value
  count++;
  counter.innerHTML = count;
  if (counter.innerHTML > '0') { //if the counter is greater than 0
    counter.style.color = '#4caf50'; // then change colour to green
  } else if (counter.innerHTML === '0') {
    counter.style.color = 'white';
  }
  counter.animate([{
    opacity: '0'
  }, {
    opacity: '1.0'
  }], {
    duration: 1000,
    fill: 'forwards'
  });

}

function decrementCounter() { //function to decrease number value
  count--;
  counter.innerHTML = count;
  if (counter.innerHTML < '0') { //if the counter is greater than 0
    counter.style.color = 'red'; // then change colour to green
  } else if (counter.innerHTML === '0') {
    counter.style.color = 'white';
  }
  counter.animate([{
    opacity: '0'
  }, {
    opacity: '1.0'
  }], {
    duration: 1000,
    fill: 'forwards'
  });
}