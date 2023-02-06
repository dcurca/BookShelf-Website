//currently reading book list that will be added to the DOM
const currReadBookList = [
    {img: './images/poisonwoodbible.jpg', title: 'The Poisonwood Bible'},
    {img: './images/nature-beast.jpg', title: 'The Nature of the Beast'}
]

//adds currently reading book(s) to the DOM
function addBook(books) {
    for(let i = 0; i < books.length; i++){
        const literal = 
    `<img src=${books[i].img} alt=${books[i].title}>
    <p>${books[i].title}</p>
    `;

    let ul = document.createElement('ul');
    let sec = document.getElementById("currently-reading");
    ul.innerHTML = literal;
    sec.append(ul);
    }
}

addBook(currReadBookList);

//add class attribute to DOM for styalization later
function addAttr(list, className) {
    for (let i = 0; i < list.length; i++){
        list[i].setAttribute("class", className);
    }    
}

const allUls = document.querySelectorAll('ul');
addAttr(allUls, "book-info");


