const myLibrary = [];

// -- BOOK CONSTRUCTOR -- //

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  this.info = function () {
    const readStatus = this.read ? 'read' : 'not read yet';
    return `${this.title} by ${this.author}, ${this.pages} pages, ${readStatus}`;
  };
}

// Manually add books to the library
const book1 = new Book('Book 1', 'Author 1', 100, true);
const book2 = new Book('Book 2', 'Author 2', 200, false);
const book3 = new Book('Book 3', 'Author 3', 300, false);

myLibrary.push(book1);
myLibrary.push(book2);
myLibrary.push(book3);

// -- ADD BOOK FUNCTION -- //

function addBookToLibrary() {
  const form = document.querySelector('.add-book-form');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').value;

    const addNewBook = new Book(title, author, pages, read);
    myLibrary.push(addNewBook);
  });
}

console.log(myLibrary);

addBookToLibrary();
