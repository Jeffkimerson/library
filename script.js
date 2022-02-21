let myLibrary = [];

function Book(title, author, pages, read) {
    title
    author
    this.pages = pages + "pages"
    this.read = function() {
        if(read == true) {
            return "read";
        }
        else {
            return "not read yet";
        }
    }
}

function addBookToLibrary() {

}