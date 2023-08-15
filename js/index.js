let library = [];

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

function addBookToLibrary(title, author, pages, isRead) {
  library.push(new Book(title, author, pages, isRead));
}

function clearShelf(shelf) {
  while (shelf.firstChild) {
    shelf.removeChild(shelf.firstChild);
  }
}

function displayLibrary() {
  const shelf = document.querySelector('main');
  clearShelf(shelf);
  library.forEach((book, index) => {
    const cover = document.createElement('div');
    cover.classList.add('book');
    const title = document.createElement('h3');
    const author = document.createElement('p');
    const pages = document.createElement('p');
    const status = document.createElement('p');
    const actions = document.createElement('div');
    actions.classList.add('actions');
    const remove = document.createElement('button');
    remove.textContent = '\u2717';
    actions.appendChild(remove);
    const toggleRead = document.createElement('button');
    toggleRead.textContent = '\u2713';
    actions.appendChild(toggleRead);
    title.textContent = book.title;
    author.textContent = book.author;
    pages.textContent = book.pages;
    status.textContent = book.isRead ? 'read' : 'not read';
    cover.dataset.indexNumber = index;
    cover.appendChild(title);
    cover.appendChild(author);
    cover.appendChild(pages);
    cover.appendChild(status);
    cover.appendChild(actions);
    shelf.appendChild(cover);

    remove.addEventListener('click', () => {
      library.splice(cover.dataset.indexNumber, 1);
      clearShelf(shelf);
      displayLibrary();
    });

    toggleRead.addEventListener('click', () => {
      library[cover.dataset.indexNumber].isRead =
        !library[cover.dataset.indexNumber].isRead;
      clearShelf(shelf);
      displayLibrary();
    });
  });
}

(function ControlCenter() {
  const aside = document.querySelector('aside');
  const newBookButton = document.querySelector('#new-book');

  this.clear = () => {
    while (aside.firstChild) {
      aside.removeChild(aside.firstChild);
    }
  };

  this.addNewBookBehavior = (button) => {
    button.addEventListener('click', () => {
      this.clear();
      this.displayNewBookForm();
    });
  };

  this.addNewBookBehavior(newBookButton);

  this.displayNewBookForm = () => {
    const form = document.createElement('form');
    const title = document.createElement('input');
    title.classList.add('title');
    title.type = 'text';
    title.placeholder = 'Title';
    title.required = true;
    const author = document.createElement('input');
    author.classList.add('author');
    author.type = 'text';
    author.placeholder = 'Author';
    author.required = true;
    const pages = document.createElement('input');
    pages.classList.add('pages');
    pages.type = 'text';
    pages.placeholder = 'Pages';
    pages.required = true;
    const labelStatus = document.createElement('label');
    labelStatus.setAttribute('for', 'status');
    labelStatus.textContent = 'Mark as read?';
    const status = document.createElement('input');
    status.id = 'read';
    status.type = 'checkbox';
    const submit = document.createElement('button');
    submit.type = 'button';
    submit.textContent = 'Add Book';
    submit.id = 'submit-book';
    form.appendChild(title);
    form.appendChild(author);
    form.appendChild(pages);
    form.appendChild(labelStatus);
    form.appendChild(status);
    form.appendChild(submit);

    submit.addEventListener('click', () => {
      if (form.checkValidity()) {
        addBookToLibrary(
          title.value,
          author.value,
          pages.value,
          status.checked
        );
        displayLibrary();
        this.clear();
        const newBook = document.createElement('button');
        newBook.id = 'new-book';
        newBook.textContent = '+';
        this.addNewBookBehavior(newBook);
        aside.appendChild(newBook);
      } else {
        alert('Please, enter the title, author and number of pages!');
      }
    });

    aside.appendChild(form);
  };
})();

// TEST
addBookToLibrary('Open Window', 'T.J. Roosevelt', 341, true);
addBookToLibrary('Mysteries Of The Hallow Grove', 'Jane Garner', 295, false);
addBookToLibrary('Cloud Landing', 'Hui Jun', 164, false);

displayLibrary();
