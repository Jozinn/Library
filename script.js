let myLibrary = [];

function Book(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    book = new Book(author.value, title.value, pages.value, Boolean(read.value));
    myLibrary.push(book);
    renderBooks();
}

function renderBooks() {
    library.innerHTML = "";
    myLibrary.forEach(book => {
        const bookRef = document.createElement("div");
        bookRef.classList.add("book");
        bookRef.setAttribute("data-index", myLibrary.indexOf(book));
        bookRef.innerHTML = `<p>Author: ${book.author}</p>
        <p>Title: ${book.title}</p>
        <p>Number of pages: ${book.pages}</p>
        <p>Read: ${book.read}</p>`;
        if(book.read) {
            bookRef.innerHTML += `<label for="is-read${myLibrary.indexOf(book)}">Have you read this book?</label>
            <input type="checkbox" class="check" id="is-read${myLibrary.indexOf(book)}" checked>`
        }
        else {
            bookRef.innerHTML += `<label for="is-read${myLibrary.indexOf(book)}">Have you read this book?</label>
            <input type="checkbox" class="check" id="is-read${myLibrary.indexOf(book)}" >`
        }
        bookRef.innerHTML += '<button class="btn">Remove</button>';
        library.appendChild(bookRef);
    });
}

const add = document.getElementById("add");
const form = document.getElementById("form");
const author = document.getElementById("author");
const title = document.getElementById("title");
const pages = document.getElementById("pages");
const read = document.getElementById("read");
const submit = document.getElementById("submit");
const library = document.getElementById("library");
const checkboxes = [...document.getElementsByClassName("check")];


document.querySelector("#library").addEventListener("click", e => {
    if(e.target.tagName == "BUTTON") {
        console.log(e.target.parentNode);
        myLibrary = myLibrary.filter((el, index) => {
            return index !== +e.target.parentNode.getAttribute("data-index");
        });
        renderBooks();
  
    }
});

document.querySelector("#library").addEventListener("change", e => {
    myLibrary[+e.target.parentNode.getAttribute("data-index")].read = !myLibrary[+e.target.parentNode.getAttribute("data-index")].read;
    renderBooks();
});

add.addEventListener("click", () => {
    add.classList.toggle("hide");
    form.classList.toggle("hide");
});

submit.addEventListener("click", () => {
    add.classList.toggle("hide");
    form.classList.toggle("hide");
    addBookToLibrary();
});

