let myLibrary = [];

function Book(title, author, pages, read) {
    title
    author
    pages
    this.read = function() {
        if(read == true) {
            return "read";
        }
        else {
            return "not read yet";
        }
    }
    this.info = function() {
        return `${title} by ${author}, ${pages} pages, ${read}`;
    }
}

function addBookToLibrary() {

}