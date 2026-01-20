'use strict';

const search = document.getElementById('search')
const searchBtn = document.getElementById('submit')
const output = document.getElementById('output')

const key = 'AIzaSyCzK4xsLEdS-bbCshmI_kdo9AFcgnm1-1Y'

let getBook = () => {
    let bookName = search.value || 'cat';
    const url = `https://www.googleapis.com/books/v1/volumes?q=${bookName} &apiKey=${key}`

    if (bookName.length <= 0) {        
        output.innerHTML = ``
        
    }  else{
        fetch(url).then(res => res.json())
        .then(data => {
            if (data.Response = true) {
                displayData(data)                
            }else{
                output.innerHTML = `result not found!`
            }
        }).catch(()=>{
            output.innerHTML = `something went wrong!`
        })
        
    }}

const displayData = (data) => {
    output.innerHTML = ``
    data.items.forEach((book) => {
        const cover = book.volumeInfo.imageLinks?.thumbnail || "";
        const { title, authors, publisher, publishedDate, description, language, pageCount, previewLink } = book.volumeInfo;

        const bookInfo = document.createElement('div');
        bookInfo.classList.add('book-info');
        bookInfo.innerHTML = `
            <div>
                <h2>${title ? title : 'Unknown'}</h2>
                <p><strong>Authors:</strong> ${authors ? authors.join(', ') : 'Unknown'}</p>
                <p><strong>Publisher:</strong> ${publisher ? publisher : 'Unknown'}</p>
                <p><strong>Published Date:</strong> ${publishedDate ? publishedDate : 'Unknown'}</p>
                <p><strong>Language:</strong> ${language ? language : 'No language available'}</p>
                <p><strong>Page Count:</strong> ${pageCount ? pageCount : 'No pageCount available'}</p>
                <p><strong>Description:</strong> ${description ? description.slice(0, 120) : 'No description available'}</p>
                <strong><a href="${previewLink ? previewLink : 'No previewLink available'}" target="_blank">Read Now</a> </strong>
            </div>
            <img class="book-cover" src="${cover ? cover : 'No image available'}">
        `;

        output.appendChild(bookInfo);
    });
}

searchBtn.addEventListener('click', (e)=> {
    output.innerHTML = `please enter a book name first!`
    output.style.color = 'red'
    e.preventDefault()
    getBook()
})

search.addEventListener('keydown', (e)=>{
    if (e.key === 'enter') {
        e.preventDefault()
        getBook()
    }
})

window.addEventListener('load', getBook)

