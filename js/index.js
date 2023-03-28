const library = [];

function Book(name, author, pages, read) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(name, author, pages, read) {
  library.push(new Book(name, author, `${pages} pages`, read));
}

// TODO: Remove test function calls and log
addBookToLibrary('Hobbit', 'J.R.R. Tolkien', 295, false);
addBookToLibrary('Harry Potter', 'J. K. Rowling', 223, true);

function showBooksInLibrary() {
  const libraryView = document.querySelector('#library');

  library.forEach((book) => {
    const bookView = document.createElement('div');
    bookView.classList.add('book');

    Object.keys(book).forEach((key) => {
      const field = document.createElement('p');
      field.classList.add(key);

      if (key === 'read') {
        field.textContent = book[key] ? 'read' : 'not read yet';
      } else {
        field.textContent = book[key];
      }

      bookView.appendChild(field);
    });

    const actions = document.createElement('div');
    actions.classList.add('actions');
    const toggleRead = document.createElement('img');
    toggleRead.id = 'toggle-read';
    toggleRead.src = '../images/book-check-outline.svg';
    actions.appendChild(toggleRead);
    const removeBook = document.createElement('img');
    removeBook.id = 'remove-book';
    removeBook.src = '../images/book-remove-outline.svg';
    actions.appendChild(removeBook);
    bookView.appendChild(actions);
    libraryView.appendChild(bookView);
  });
}

(function showOnLoad() {
  showBooksInLibrary();
})();

function toggleNewBookForm() {
  const interactions = document.querySelector('#interactions');
  const newBookButton = document.querySelector('#new-book');
  if (newBookButton.classList.contains('active')) {
    interactions.style.display = 'none';
    newBookButton.classList.remove('active');
    newBookButton.textContent = 'NEW BOOK';
  } else {
    interactions.style.display = 'grid';
    newBookButton.classList.add('active');
    newBookButton.textContent = 'CLOSE';
    const addBookButton = document.querySelector('#add-to-library');
    addBookButton.addEventListener('click', () => {
      const name = document.querySelector('#name').value;
      const author = document.querySelector('#author').value;
      const pages = document.querySelector('#pages').value;
      const read = !!(document.querySelector('#read').checked);
      addBookToLibrary(name, author, pages, read);
      showBooksInLibrary();
    });
  }
}

const newBookButton = document.querySelector('#new-book');
newBookButton.addEventListener('click', () => {
  toggleNewBookForm();
});
