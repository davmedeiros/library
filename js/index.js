const library = [];

function Book(name, author, pages, read) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(name, author, pages, read) {
  library.push(new Book(name, author, pages, read));
}

addBookToLibrary('Hobbit', 'J.R.R. Tolkien', 295, false);
addBookToLibrary('Harry Potter', 'J. K. Rowling', 223, false);
console.log(library);
