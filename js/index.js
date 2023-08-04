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
    library.forEach(book => console.log(book));
}

// TEST
addBookToLibrary('Open Window', 'T.J. Roosevelt', 341, true);
addBookToLibrary('Mysteries Of The Hallow Grove', 'Jane Garner', 295, false);
addBookToLibrary('Cloud Landing', 'Hui Jun', 164, false);
