// Form Blur Event Listeners - listening for blur event to validate input
document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('zip').addEventListener('blur', validateZip);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);

function validateName() { //on blur event get value of name
  const name = document.getElementById('name');
  const re = /^[a-zA-Z]{2,10}$/; //variable for regular expression - name should be letters

  if (!re.test(name.value)) { //to evaluate above
    name.classList.add('is-invalid'); //add the is-invalid class to show error
  } else {
    name.classList.remove('is-invalid'); //or remove error if input is valid
  }
}

function validateZip() { // US zip code format
  const zip = document.getElementById('zip');
  const re = /^[0-9]{5}(-[0-9]{4})?$/; // 66666-2222 zip format

  if (!re.test(zip.value)) { //same process as validateName
    zip.classList.add('is-invalid');
  } else {
    zip.classList.remove('is-invalid');
  }
}

function validateEmail() { //email address
  const email = document.getElementById('email');
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/; // brad@gmail.com 

  if (!re.test(email.value)) { //same validation process
    email.classList.add('is-invalid');
  } else {
    email.classList.remove('is-invalid');
  }
}

function validatePhone() { //US phone number
  const phone = document.getElementById('phone');
  const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/; // regular expression form multiple formats - 555-555-5555 

  if (!re.test(phone.value)) {
    phone.classList.add('is-invalid');
  } else {
    phone.classList.remove('is-invalid');
  }
}