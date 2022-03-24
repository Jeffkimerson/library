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

const modal = document.getElementById('bookModal');

const modalCloseBtn = document.getElementById('modal-close-btn');

//Create button event to open modal for user input
const modalButton = document.getElementById('modal-btn');
modalButton.addEventListener('click', () => {


})

const openModal = function() {
    //Add CSS changes to open modal
}
