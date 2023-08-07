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

function displayLibrary() {
    const shelf = document.querySelector('main');
    library.forEach(book => {
        const cover = document.createElement('div');
        cover.classList.add('book');
        const title = document.createElement('h3');
        const author = document.createElement('p');
        const pages = document.createElement('p');
        const status = document.createElement('p');
        title.textContent = book.title;
        author.textContent = book.author;
        pages.textContent = book.pages;
        status.textContent = book.isRead ? 'read' : 'not read';
        cover.appendChild(title);
        cover.appendChild(author);
        cover.appendChild(pages);
        cover.appendChild(status);
        shelf.appendChild(cover);
    });
}

(function ControlCenter() {
    const aside = document.querySelector('aside');
    const newBookButton = document.querySelector('#new-book');

    this.clear = () => {
        while (aside.firstChild) {
            aside.removeChild(aside.firstChild);
        }
    }

    this.displayNewBookForm = () => {
        console.log('hit');
        const form = document.createElement('form');
        const title = document.createElement('input');
        title.type = 'text';
        title.placeholder = 'Title';
        form.appendChild(title);
        aside.appendChild(form);
    }
    
    newBookButton.addEventListener('click', () => {
        this.clear();
        this.displayNewBookForm();
    });
})();



// TEST
addBookToLibrary('Open Window', 'T.J. Roosevelt', 341, true);
addBookToLibrary('Mysteries Of The Hallow Grove', 'Jane Garner', 295, false);
addBookToLibrary('Cloud Landing', 'Hui Jun', 164, false);

displayLibrary();