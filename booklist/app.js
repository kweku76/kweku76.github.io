// Book Constructor

function Book(title, author, isbn) {

  this.title = title;
  this.author = author;
  this.isbn = isbn;

}


//UI constructor
function UI() {}

// Adds book to list
UI.prototype.addBookToList = function (book) {
  const list = document.getElementById('book-list');
  //create table row element - where the data will sit
  const row = document.createElement('tr');
  // inserting html columns into the row element
  row.innerHTML =
    `<td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.isbn}</td>
  <td><a href="#" class="delete"> x </a></td>`;
  list.appendChild(row); //this will add the html above to the id book-list, so each time we enter a book in the list it will show up at the bottom of html page.
}


// Show alert
UI.prototype.showAlert = function (message, className) {

  //create div
  const div = document.createElement('div');
  // Add classes
  div.className = `alert ${className}`;
  // Add text
  div.appendChild(document.createTextNode(message));
  //get parent
  const container = document.querySelector('.container'); //we need . before container because its a class
  //get form
  const form = document.querySelector('#book-form');
  //insert alert

  container.insertBefore(div, form);

  //Error alert Timeout after 3 seconds
  setTimeout(function () {
    document.querySelector('.alert').remove();
  }, 3000);
}

// DELETE BOOK
UI.prototype.deleteBook = function (target) {
  if (target.className === 'delete') {
    target.parentElement.parentElement.remove();

  }
}

// Clear fields after submit
UI.prototype.clearFields = function () {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
}


// Event listener for ADD BOOK - related to the html elements such as id's
document.getElementById('book-form').addEventListener('submit', function (e) {
  //this gets the form values for each attribute
  const title = document.getElementById('title').value,
    author = document.getElementById('author').value,
    isbn = document.getElementById('isbn').value;

  //instantiate a book object
  const book = new Book(title, author, isbn);

  //instantiate a UI object
  const ui = new UI();

  // Validation
  if (title === '' || author === '' || isbn === '') {
    // error alert
    ui.showAlert('Please fill in all fields', 'error'); // this will show an inline alert prompt using the class 'error'
  } else {
    //Add book to list - we pass in the book object below
    ui.addBookToList(book);

    // show csuccess
    ui.showAlert('Book Added!', 'success');

    //clears fields after submit
    ui.clearFields();

  }



  e.preventDefault(); //this prevents the default behaviour when a submit button is clicked on anything with a form.

});


// Event listener for DELETE BOOK
document.getElementById('book-list').addEventListener('click', function (e) {
  //instantiate a UI object
  const ui = new UI();

  //delete book
  ui.deleteBook(e.target);

  //show 'book removed' message
  ui.showAlert('Book Removed!', 'success');

  e.preventDefault();
});