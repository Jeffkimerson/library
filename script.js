let myLibrary = [];

function Book(title, author, pages, read) {
    title
    author
    pages
    read
    this.info = function() {
        return `${title} by ${author}, ${pages} pages, ${read}`;
    }
}

function addBookToLibrary() {

}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, true);