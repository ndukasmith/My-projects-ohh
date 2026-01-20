'use strict';


function searchBooks(event) {

event.preventDefault();


const searchTerm = document.getElementById('search').value;

const apiKey = 'AIzaSyCzK4xsLEdS-bbCshmI_kdo9AFcgnm1-1Y';

const url = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&apiKey=${apiKey}`;


const xhr = new XMLHttpRequest();

xhr.open('GET', url, true);

xhr.onload = function() {

if (this.status === 200) {

const data = JSON.parse(this.responseText);

displayResults(data);
} else {

console.error('Error:', this.statusText);
}
};

xhr.onerror = function() {

console.error('Request error...');
};

xhr.send();
}


function displayResults(data) {

const output = document.getElementById('output');

output.innerHTML = '';

if (data.items) {

data.items.forEach(book => {

const title = book.volumeInfo.title;

const authors = book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'No authors listed';

output.innerHTML += `<div class="book-info"><h3>${title}</h3><p>${authors}</p></div>`;
});
} else {

output.innerHTML = '<p class="msg">No results found</p>';
}
}


document.getElementById('searchForm').addEventListener('submit', searchBooks);
