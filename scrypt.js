let myLibrary = [];

function Book(book){
    myLibrary.push(book);
    displayBooks(book);
}

function addBookToLibrary(){
    let book = prompt("Please enter the name of the book");
    if(book != null){
        Book(book);
    }
}


const books = document.getElementById("books");
const newBookButton = document.getElementById("newBookButton");

newBookButton.addEventListener('click', addBookToLibrary);

//delete all displayed books in webpage
function resetBooks(){
    while(books.firstChild){
        books.firstChild.remove();
    }
}

function displayBooks(){   
    let index = 0;
    resetBooks();//remove all displayed books in webpage, prevent duplicates.
    myLibrary.forEach((book) => {
        const divElement = document.createElement('div');
        divElement.textContent = book;
        books.appendChild(divElement);
        index++;
    });
    console.log(index); //debugin line
}
