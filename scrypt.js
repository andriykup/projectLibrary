let myLibrary = [];

class Book {
    constructor(title) {
        this.title = title;
    }
}

function addBookToLibrary(){
    let title = prompt("Please enter the name of the book");
    if(title != null){
        const bookNew = new Book(title);
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
        bookTitle.textContent = "Title: " + myLibrary[index].title;
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



/*

https://www.w3docs.com/snippets/javascript/how-to-create-a-popup-form-using-javascript.html

4 - Add a “NEW BOOK” button that brings up a form allowing users to input the details 
for the new book: author, title, number of pages, whether it’s been read and anything 
else you might want. You will most likely encounter an issue where submitting your 
form will not do what you expect it to do. That’s because the submit input tries to 
send the data to a server by default. If you’ve done the bonus section for the 
calculator assignment, you might be familiar with event.preventDefault();. 
Read up on the event.preventDefault documentation again and see how you can solve 
this issue!

6 - Add a button on each book’s display to change its read status.
        1 - To facilitate this you will want to create the function that toggles a 
            book’s read status on your Book prototype instance.

*/
