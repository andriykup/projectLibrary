let myLibrary = [];

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

function addBookToLibrary(){
    let title = prompt("Please enter the name of the book");
    let author = prompt("Please enter the name of the author");
    let pages = prompt("Please enter the number of pages");
    let read = confirm("Did you read the book?");
    if(title != null && author != null && pages != null){
        const bookNew = new Book(title, author, pages, read);
        myLibrary.push(bookNew);
        displayBooks(bookNew);
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
        const bookAuthor = document.createElement('p');
        const bookPages = document.createElement('p');
        const bookRead = document.createElement('p');
        bookTitle.textContent = "Title: " + myLibrary[index].title;
        bookAuthor.textContent = "Author: " + myLibrary[index].author;
        bookPages.textContent = "Number of pages: " + myLibrary[index].pages;
        bookRead.textContent = "Read: " + myLibrary[index].read;
        divElement.appendChild(bookTitle);
        divElement.appendChild(bookAuthor);
        divElement.appendChild(bookPages);
        divElement.appendChild(bookRead);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.setAttribute('class', 'deleteButton');
        deleteButton.dataset.index = index; // setting dataset-index to the button
        divElement.appendChild(deleteButton);

        deleteButton.addEventListener('click', deleteBook.bind(this, deleteButton.dataset.index));

        index++;
    });
}



/*

https://www.w3docs.com/snippets/javascript/how-to-create-a-popup-form-using-javascript.html

!!! create a form that allowing users to input the details,
--- event.preventDefault();

6 - Add a button on each book’s display to change its read status.
        1 - To facilitate this you will want to create the function that toggles a 
            book’s read status on your Book prototype instance.

*/
