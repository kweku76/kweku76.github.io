const hexNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
//this array is total numbers and letter that will give us a hex value
const hexBtn = document.querySelector('.hexBtn'); //clicking this button triggers the background to randomly change colour
const bodyBcg = document.querySelector('body'); //targets the background where colour will change
const hex = document.querySelector('.hex'); //targets the text which will display the random hex colour code

hexBtn.addEventListener('click', getHex); //event listener listens for click and runs getHex function below

function getHex() { //initial values are empty until button is clicked
  let hexCol = '#';

  for (let i = 0; i < 6; i++) { //standard for loop to loop through hexNumbers array of numbers and letters
    let random = Math.floor(Math.random() * hexNumbers.length); //using Math floor and random to multiply hexNumbers and get length (6)
    hexCol += hexNumbers[random]; //
    console.log(hexCol);

  }
  bodyBcg.style.backgroundColor = hexCol; // generating body colour with css attributes
  hex.innerHTML = hexCol; //triggers the hex text to show the value of hexCol (ie. #E2174B)
}