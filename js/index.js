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
        title.classList.add('title');
        title.type = 'text';
        title.placeholder = 'Title';
        const author = document.createElement('input');
        author.classList.add('author');
        author.type = 'text';
        author.placeholder = 'Author';
        const pages = document.createElement('input');
        pages.classList.add('pages');
        pages.type = 'text';
        pages.placeholder = 'Pages';
        const labelStatus = document.createElement('label');
        labelStatus.setAttribute('for', 'status');
        labelStatus.textContent = 'Mark as read?';
        const status = document.createElement('input');
        status.id = 'read';
        status.type = 'checkbox';
        form.appendChild(title);
        form.appendChild(author);
        form.appendChild(pages);
        form.appendChild(labelStatus);
        form.appendChild(status);
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