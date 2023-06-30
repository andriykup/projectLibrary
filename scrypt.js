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

function deleteBook(index){
    myLibrary.splice(index, 1);
    displayBooks();
}

function displayBooks(){   
    let index = 0;
    resetBooks();//removes all displayed books in webpage, prevent duplicates.
    myLibrary.forEach((book) => {
        const divElement = document.createElement('div');
        divElement.style.display = 'grid';
        books.appendChild(divElement);
        
        const bookTitle = document.createElement('p');
        bookTitle.textContent = "Title: " + book;
        divElement.appendChild(bookTitle);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.setAttribute('class', 'deleteButton');
        deleteButton.dataset.index = index; // setting dataset-index to the button
        divElement.appendChild(deleteButton);

        deleteButton.addEventListener('click', deleteBook.bind(this, deleteButton.dataset.index));

        index++;
    });
}

