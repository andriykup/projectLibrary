let myLibrary = ["book1", "book2", "book3", "book4"];

function Book(book){
    myLibrary.push(book);
}

function addBookToLibrary(){
    let book = prompt("Please enter the name of the book");
    if(book != null){
        Book(book);
    }
}

const books = document.getElementById("books");

myLibrary.forEach((book) => {
    const divElement = document.createElement('div');
    divElement.textContent = book;
    books.appendChild(divElement);
});