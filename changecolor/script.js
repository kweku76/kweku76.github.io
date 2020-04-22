//target button and body

const colorBtn = document.querySelector('.colorBtn');
const bodyBcg = document.querySelector('body');

//create array to hold the background colours

const colors = ['yellow', 'red', 'green', '#3b5998']

colorBtn.addEventListener('click', changeColor);

function changeColor() {
  //bodyBcg.style.backgroundColor = colors[2]; - this changes bg to green
  let random = Math.floor(Math.random() * colors.length) // this will create a function that randomises the colours within the 'colors' array above
  bodyBcg.style.backgroundColor = colors[random];
}