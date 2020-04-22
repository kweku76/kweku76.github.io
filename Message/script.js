const sendBtn = document.querySelector('#sendBtn');
const messageIn = document.querySelector('#messageIn');
const messageOut = document.querySelector('#messageOut');

sendBtn.addEventListener('click', sendMsg) //listens for the click of button, then performs sendMsg function below

function sendMsg() {
  let content = messageIn.value; //this 'content' equals the content of the input field
  console.log(content); // logs the content of message in input field
  if (content === '') { // this checks the value of input, if empty, alert is shown
    alert('Please enter valid message')
  } else {
    messageOut.innerHTML = content;
    messageIn.value = ''; // sets the value to empty in input field
  }

}