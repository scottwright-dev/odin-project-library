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

// -- DISPLAY LIBRARY -- //

const libraryContainer = document.createElement('div');
libraryContainer.id = 'library-container';
document.body.append(libraryContainer);

function displayLibrary() {
  libraryContainer.innerHTML = '';

  myLibrary.forEach((book) => {
    const bookCard = document.createElement('div');

    const title = document.createElement('h2');
    title.textContent = `Title: ${book.title}`;

    const author = document.createElement('p');
    author.textContent = `Author: ${book.author}`;

    const pages = document.createElement('p');
    pages.textContent = `Pages: ${book.pages}`;

    const readStatus = document.createElement('p');
    readStatus.textContent = `Read status: ${book.read}`;

    bookCard.append(title);
    bookCard.append(author);
    bookCard.append(pages);
    bookCard.append(readStatus);

    libraryContainer.append(bookCard);
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
    const read = document.getElementById('read').value;

    const addNewBook = new Book(title, author, pages, read);
    myLibrary.push(addNewBook);

    form.reset();

    displayLibrary();
  });
}

displayLibrary();

addBookToLibrary();
