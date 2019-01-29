/* When wanting to put the JavaScript and DOM to load from the head tag in the
HTML5 you can put everything inside document.addEventListener('DOMContentLoader'.function(){
    the whole code
})

From then the DOM recognizes the elements and can start working and loading
on the project.

Other wise just attach at the end of the html body tag.
*/

/*Lesson 10 Event Bubbling and 11 Interacting with Forms 12 Creating Elements */

const list = document.querySelector('#book-list ul')

//delete books -> Event Bubbling
list.addEventListener('click', (e) => {
    if(e.target.className == 'delete'){
        const li = e.target.parentElement
        list.removeChild(li)
    }
})

//add books - interacting with forms

const addForm = document.forms['add-book']

addForm.addEventListener('submit', (e) =>{
    e.preventDefault()
    const value = addForm.querySelector('input[type = "text"]').value
    
    //create elements
    const li = document.createElement('li')
    const bookName = document.createElement('span') 
    const deleteBtn = document.createElement('span')

    //add Classes
    bookName.classList.add("name") 
    deleteBtn.classList.add("delete")

    //add content
    deleteBtn.textContent = 'delete'
    bookName.textContent = value

    //li append to DOM
    li.appendChild(bookName)
    li.appendChild(deleteBtn)
    list.appendChild(li)
})

/*Lesson 15 Check boxes and  change events */

//hide books
const hideBox = document.querySelector('#hide')

hideBox.addEventListener('change', (e) =>{
    if(hideBox.checked){
        list.style.display = 'none'
    } else{
        list.style.display = 'initial'
    }
})

/*Lesson 16 Custom search filter*/

//filter books
const searchBar = document.forms['search-books'].querySelector('input')

searchBar.addEventListener('keyup', (e) =>{
    
    const term = e.target.value.toLowerCase()
    const books = list.getElementsByTagName('li')
    
    Array.from(books).forEach((book) => {
        const title = book.firstElementChild.textContent
        if(title.toLocaleLowerCase().indexOf(term) != -1){
            book.style.display = 'block'
        } else {
            book.style.display = 'none'
        }
    })
})

// Lesson 17 tabbed contents

//tabbed content
const tabs = document.querySelector('.tabs')
const panels = document.querySelectorAll('.panel')

tabs.addEventListener('click', (e) => {
    if(e.target.tagName == 'LI'){
        const targetPanel = document.querySelector(e.target.dataset.target)
        panels.forEach((panel) => {
            if(panel == targetPanel){
                panel.classList.add('active')
            } else{
                panel.classList.remove('active')
            }
        })
    }
})



/* Lesson 9 learned how to use the transformation to Array method to erase
 erase elements and prevent links and other parts of the web to perform.


 var btns = document.querySelectorAll('#book-list .delete')

Array.from(btns).forEach(function(btn){
    btn.addEventListener('click', (e) => {
        const li = e.target.parentElement

        li.parentNode.removeChild(li);
    })
})

const link = document.querySelector('#page-banner a')

link.addEventListener('click', (e) => {
    e.preventDefault()
    console.log('navigation to:', e.target.textContent, 'was prevented')
})
*/


//Lesson 7 & 8.
// const bookList = document.querySelector('#book-list');
// console.log('The parent node is:', bookList.parentNode);
// console.log('The parent element is:', bookList.parentElement.parentElement);

// console.log('The Child Nodes are:', bookList.children);

// console.log('The book-list next sibling is:', bookList.nextSibling);
// console.log('The book-list next element sibling is:', bookList.nextElementSibling);

// console.log('The book-list previous sibling is:', bookList.previousSibling);
// console.log('The book-list previous element sibling is:', bookList.previousElementSibling);

// bookList.previousElementSibling.querySelector('p').innerHTML += '<br /> Too cool for everyone else';



// Lesson 6
// const banner = document.querySelector('#page-banner')

// console.log('#page-benner node type is:', banner.nodeType)
// console.log('#page-benner node type is:', banner.nodeName)
// console.log('#page-benner has child nodes:', banner.hasChildNodes())

// const clonedBanner = banner.cloneNode(true)
// console.log(clonedBanner)



/*Lesson 5
var books = document.querySelectorAll('#book-list li .name')

Array.from(books).forEach(function(book){
    book.textContent += ' (book title)';
})

const bookList = document.querySelector('#book-list')
//bookList.innerHTML = '<h2>Books and more books...</h2>'
bookList.innerHTML += '<p>This is how you add HTML.</p>'*/


/*var books = document.querySelector('#book-list li .name') => Don't need for Each

console.log(books);

var books2 = document.getElementsByClassName('name') => Need for Each

Array.from(books2).forEach(function(book){
    console.log(books2)
})*/





/*const search = document.getElementById('search-books');
const bookList = document.getElementById('book-list');

console.log(search, bookList);*/

/* Lesson 3
var titles = document.getElementsByClassName('title')

console.log(Array.isArray(titles))
console.log(Array.isArray(Array.from(titles)))

Array.from(titles).forEach(function(title){
    console.log(title)
});*/


/* Lesson 4
const wmf = document.querySelector('#book-list li:nth-child(2) .name');
console.log(wmf);

var books = document.querySelectorAll('#book-list li .name')
console.log(books);

Array.from(books).forEach(function(books){
    console.log(books)
})*/