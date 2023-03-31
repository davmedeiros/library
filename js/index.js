const library = [];

class Book {
  constructor(name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  toggleRead() {
    this.read = !this.read;
  }
}

function addBookToLibrary(name, author, pages, read) {
  library.push(new Book(name, author, `${pages} pages`, read));
}

function removeBookFromLibrary(index) {
  library.splice(index, 1);
}

function showBooksInLibrary() {
  const libraryView = document.querySelector('#library');

  while (libraryView.lastChild) {
    libraryView.removeChild(libraryView.lastChild);
  }

  let count = 0;
  library.forEach((book) => {
    const bookView = document.createElement('div');
    bookView.classList.add('book');
    bookView.dataset.indexNumber = count;

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
    toggleRead.classList.add('toggle-read');
    toggleRead.src = './images/book-check-outline.svg';
    toggleRead.alt = 'Toggle read';
    toggleRead.title = 'Toggle read';
    actions.appendChild(toggleRead);
    const removeBook = document.createElement('img');
    removeBook.classList.add('remove-book');
    removeBook.src = './images/book-remove-outline.svg';
    removeBook.alt = 'Remove book';
    removeBook.title = 'Remove book';
    actions.appendChild(removeBook);
    bookView.appendChild(actions);
    libraryView.appendChild(bookView);

    removeBook.addEventListener('click', () => {
      removeBookFromLibrary(bookView.dataset.indexNumber);
      showBooksInLibrary();
    });

    toggleRead.addEventListener('click', () => {
      library[bookView.dataset.indexNumber].toggleRead();
      showBooksInLibrary();
    });

    count += 1;
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
  }
}

const newBookButton = document.querySelector('#new-book');
newBookButton.addEventListener('click', () => {
  toggleNewBookForm();
});

const addBookButton = document.querySelector('#add-to-library');
addBookButton.addEventListener('click', (e) => {
  e.preventDefault();
  const name = document.querySelector('#name');
  const author = document.querySelector('#author');
  const pages = document.querySelector('#pages');
  const read = document.querySelector('#read');
  addBookToLibrary(name.value, author.value, pages.value, !!read.checked);
  toggleNewBookForm();
  name.value = '';
  author.value = '';
  pages.value = '';
  read.checked = false;
  showBooksInLibrary();
});
