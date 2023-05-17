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

const libraryContainer = document.createElement('div');
libraryContainer.id = 'library-container';
document.body.append(libraryContainer);

function displayLibrary() {
  libraryContainer.innerHTML = '';

  myLibrary.forEach((book, index) => {
    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');

    const title = document.createElement('h2');
    title.textContent = `Title: ${book.title}`;

    const author = document.createElement('p');
    author.textContent = `Author: ${book.author}`;

    const pages = document.createElement('p');
    pages.textContent = `Pages: ${book.pages}`;

    const readStatus = document.createElement('p');
    readStatus.textContent = `Read status: ${book.read ? 'read' : 'not yet read'}`;

    bookCard.append(title);
    bookCard.append(author);
    bookCard.append(pages);
    bookCard.append(readStatus);

    libraryContainer.append(bookCard);

    addRemoveButton(bookCard, index);
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

function addRemoveButton(bookCard, index) {
  const removeBtn = document.createElement('button');
  removeBtn.classList.add('remove-button');
  removeBtn.textContent = 'Remove';
  removeBtn.setAttribute('data-index', index);

  removeBtn.addEventListener('click', (event) => {
    const clickedIndex = event.target.dataset.index;
    removeBook(clickedIndex);
  });

  bookCard.append(removeBtn);
}

addBookToLibrary();
