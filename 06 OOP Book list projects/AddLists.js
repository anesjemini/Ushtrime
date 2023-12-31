class book {
 constructor(title, author, isbn) {
 this.title = title;
 this.author = author;
 this.isbn = isbn;
 }
}

class UI {
 addBookToList(book) {
    const list = document.getElementById('book-list');
    // Create tr element
    const row = document.createElement('tr');
    // Insert cols
    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href="#" class="delete">X<a></td>
    `;
  
    list.appendChild(row);
 }

 showAlert(message, className) {
    const div = document.createElement('div');
    // Add classes
    div.className = `alert ${className}`;
    // Add text
    div.appendChild(document.createTextNode(message));
    // Get parent
    const container = document.querySelector('.container');
    // Get form
    const form = document.querySelector('#book-form');
    // Insert alert
    container.insertBefore(div, form);
  
    // Timeout after 3 sec
    setTimeout(function(){
      document.querySelector('.alert').remove();
    }, 3000);
 }

 deleteBook(target) {
    if(target.className === 'delete'){
        target.parentElement.parentElement.remove();
      }
 }
  
 clearFields() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
 }
}

class Store {
  static getBooks() {
  let books;
  if(localStorage.getItem('books') === null) {
     books = [];
  } else {
     books = JSON.parse(localStorage.getItem('books'));
  }

  return books;
   }

   static displayBooks() {

   }

   static addBook() {
   const books = Store.getBooks();

   books.push(book);
   
   localStorage.setItem
   }
   static removeBook() {

   }
} 




