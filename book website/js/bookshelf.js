//bookshelf that will be added to the DOM
const bookShelf = [
    {img: './images/dowry.jpg', title: 'A Dowry of Blood', author: 'S.T. Gibson', link: 'https://www.goodreads.com/book/show/56666839-a-dowry-of-blood'},
    {img: './images/dream-house.jpg', title: 'In the Dream House', author: 'Carmen Maria Machado', link: 'https://www.goodreads.com/book/show/43317482-in-the-dream-house'},
    {img: './images/from-the-ashes.jpg', title: 'From the Ashes: My Story of Being Métis, Homeless, and Finding My Way', author: 'Jesse Thistle', link: 'https://www.goodreads.com/book/show/43822761-from-the-ashes'},
    {img: './images/the-last-letter.jpg', title: 'The Last Letter', author: 'Rebecca Yarros', link: 'https://www.goodreads.com/book/show/40045986-the-last-letter'},
    {img: './images/freshwater.jpg', title: 'Freshwater', author: 'Akwaeke Emezi', link: 'https://www.goodreads.com/book/show/35412372-freshwater'},
    {img: './images/great-alone.jpg', title: 'The Great Alone', author: 'Kristin Hannah', link: 'https://www.goodreads.com/book/show/34912895-the-great-alone'},
    {img: './images/crooked-kingdom.jpg', title: 'Crooked Kingdom', author: 'Leigh Bardugo', link: 'https://www.goodreads.com/book/show/22299763-crooked-kingdom'},
    {img: './images/six-of-crows.jpg', title: 'Six of Crows', author: 'Leigh Bardugo', link: 'https://www.goodreads.com/book/show/23437156-six-of-crows'},
    {img: './images/achilles.png', title: 'The Song of Achilles', author: 'Madeline Miller', link: 'https://www.goodreads.com/book/show/13623848-the-song-of-achilles'},
    {img: './images/splendid-suns.jpg', title: 'A Thousand Splendid Suns', author: 'Khaled Hosseini', link: 'https://www.goodreads.com/book/show/128029.A_Thousand_Splendid_Suns'}
]

//adds bookshelf to the DOM
function addBook(books) {
    for(let i = 0; i < books.length; i++){
        const literal = 
    `
    <p id="title">${books[i].title}</p>
    <p>${books[i].author}</p>
    <a href=${books[i].link}><img src=${books[i].img} alt=${books[i].title}></a>
    `;

    let ul = document.createElement('ul');
    let li = document.createElement('li');
    let sec = document.getElementById("bookshelf");
    li.innerHTML = literal;
    ul.append(li);
    sec.append(ul);
    }
}

addBook(bookShelf);
