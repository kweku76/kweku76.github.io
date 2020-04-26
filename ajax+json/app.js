document.getElementById('button').addEventListener('click', loadData);

function loadData() {
  // Create an XHR Object
  const xhr = new XMLHttpRequest();

  // OPEN
  xhr.open('GET', 'data.txt', true); //specifies type of request we make

  // console.log('READYSTATE', xhr.readyState);

  // Optional - Used for spinners/loaders
  xhr.onprogress = function () {
    console.log('READYSTATE', xhr.readyState);
  }

  xhr.onload = function () {
    console.log('READYSTATE', xhr.readyState);
    if (this.status === 200) { // status equals everything went well -OK
      //console.log(this.responseText);
      document.getElementById('output').innerHTML = `<p>${this.responseText}</p>`;
    }
  }

  // xhr.onreadystatechange = function() {
  //   console.log('READYSTATE', xhr.readyState);
  //   if(this.status === 200 && this.readyState === 4){
  //     console.log(this.responseText);
  //   }
  // }

  xhr.onerror = function () {
    console.log('Request error...');
  }

  xhr.send(); // THISis the final insruction to send or fetch data


  // readyState Values
  // 0: request not initialized 
  // 1: server connection established
  // 2: request received 
  // 3: processing request 
  // 4: request finished and response is ready


  // HTTP Statuses
  // 200: "OK"
  // 403: "Forbidden"
  // 404: "Not Found"
}