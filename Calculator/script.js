//variables - each variable represents an element on the page (css classes)
const btns = document.querySelectorAll('.btn');
const screen = document.querySelector('.screen');
const equalBtn = document.querySelector('.btn-equal');
const clearBtn = document.querySelector('.btn-clear');

//this for loop will loop through all the .btns. the i means index
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function () { //each btn has an event listener for when the btn is clicked, a function below is activated

    let number = btns[i].getAttribute('data-num'); // number retrieves the value attributed to each number or symbol ( data-num )
    screen.value += number //the value of screen is equal to the number that has been clicked

  })
}

equalBtn.addEventListener('click', function () { //similar to above but this event listener listens for the = button click
  if (screen.value === '') { //if the input is empty and we click = we get an alert
    alert('input is empty!')
  } else { //or continue below...

    let value = eval(screen.value); // this evaluates the data on screen 3+2 =5
    screen.value = value; //the result on screen is what has been evaluated from value
  }
})

clearBtn.addEventListener('click', function () {
  screen.value = ''; //this function returns an empty value which will clear the screen.
})