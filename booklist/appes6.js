//ES6 VERSION
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}
//ES6 VERSION
class UI {
  addBookToList(book) {
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

  showAlert(message, className) {

    const div = document.createElement('div'); //create div
    div.className = `alert ${className}`; // Add classes
    div.appendChild(document.createTextNode(message)); // Add text
    //get parent
    const container = document.querySelector('.container'); //we need . before container because its a class
    //get form
    const form = document.querySelector('#book-form'); //insert alert
    container.insertBefore(div, form); //Error alert Timeout after 3 seconds
    setTimeout(function () {
      document.querySelector('.alert').remove();
    }, 3000);
  }

  deleteBook(target) {
    if (target.className === 'delete') {
      target.parentElement.parentElement.remove();
    }
  }

  clearFields() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
  }

}

//LOCAL STORAGE CLASS
class Store {
  static getBooks() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  static displayBooks() {
    const books = Store.getBooks();
    books.forEach(function (book) {
      const ui = new UI;
      // Add book to UI
      ui.addBookToList(book);
    })
  }

  static addBook(book) {
    const books = Store.getBooks(); //gets books from localstorage
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books)); //we use JSON to store in localStorage
  }
  static removeBook(isbn) {
    const books = Store.getBooks();
    books.forEach(function (book, index) {
      if (book.isbn === isbn) {
        books.splice(index, 1);
      }
    });
  }
}

// DOM Load Event LS
document.addEventListener('DOMContentLoaded', Store.displayBooks);
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

    // ADD TO LOCAL STORAGE
    Store.addBook(book);
    ui.showAlert('Book Added!', 'success'); // show success MESSAGE
    //clears fields after submit
    ui.clearFields();
  }
  e.preventDefault(); //this prevents the default behaviour when a submit button is clicked on anything with a form.
});


// Event listener for DELETE BOOK
document.getElementById('book-list').addEventListener('click', function (e) {
  //instantiate a UI object
  const ui = new UI();
  ui.deleteBook(e.target); //delete book

  //delete book from LOCAL STORAGE
  Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
  //show 'book removed' message
  ui.showAlert('Book Removed!', 'success');
  e.preventDefault();
});