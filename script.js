const myLibrary = [];

// -- BOOK CONSTRUCTOR -- //

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = () => `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
}

// -- DISPLAY LIBRARY -- //

const libraryTableBody = document.querySelector('.library-table tbody');

function displayLibrary() {
  libraryTableBody.innerHTML = '';

  myLibrary.forEach((book, index) => {
    const row = document.createElement('tr');

    const titleCell = document.createElement('td');
    titleCell.textContent = book.title;

    const authorCell = document.createElement('td');
    authorCell.textContent = book.author;

    const pagesCell = document.createElement('td');
    pagesCell.textContent = book.pages;

    const readCell = document.createElement('td');
    readCell.textContent = book.read ? 'Read' : 'Not yet read';

    const removeCell = document.createElement('td');
    addRemoveButton(removeCell, index);

    row.appendChild(titleCell);
    row.appendChild(authorCell);
    row.appendChild(pagesCell);
    row.appendChild(readCell);
    row.appendChild(removeCell);

    libraryTableBody.appendChild(row);
  });
}

// -- ADD BOOK FUNCTION -- //

function addBookToLibrary() {
  const form = document.querySelector('.add-book-form');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').checked;

    const addNewBook = new Book(title, author, pages, read);
    myLibrary.push(addNewBook);

    form.reset();

    // display library immediately after adding book
    displayLibrary();
  });
}

// -- REMOVE BOOK FROM LIBRARY -- //

function removeBook(index) {
  myLibrary.splice(index, 1);
  displayLibrary();
}

// -- REMOVE BUTTON -- //

function addRemoveButton(cell, index) {
  const removeBtn = document.createElement('div');
  removeBtn.textContent = '';
  removeBtn.classList.add('remove-btn');
  removeBtn.addEventListener('click', () => removeBook(index));
  cell.appendChild(removeBtn);
}

addBookToLibrary();

// Add dummy books
const book1 = new Book('The Creative Act', 'Rick Rubin', 432, true);
const book2 = new Book('Don\'t Make Me Think', 'Steve Krug', 200, true);
const book3 = new Book('Kitchen Confidential', 'Anthony Bourdain', 362, true);

myLibrary.push(book1, book2, book3);

// Display the library
displayLibrary();

