//Selecting popup box popup overlay and button

let popupoverLay = document.querySelector(".popup-overlay")
let popupBox = document.querySelector(".popup-box")

let addPopupButton = document.getElementById("add-popup-button")

addPopupButton.addEventListener("click", function(){
    popupoverLay.style.display = "block"
    popupBox.style.display = "block"
} )


//select cancel button

let cancelPopup = document.getElementById("cancel-popup")
cancelPopup.addEventListener("click" ,function(event){

 event.preventDefault() //default ha event nadakama stop agum
popupoverLay.style.display = "none" // nama click panna tha close agum
popupBox.style.display = "none"
})


//Add button click pannum pothu add agum
//Select container,add-book,book-title-input,book author book,book description-input

let container = document.querySelector(".container")
let addBook = document.getElementById("add-book")
let bookTitleInput = document.getElementById("book-title-input")
let bookAuthorInput = document.getElementById("book-author-input")
let bookDescriptionInput = document.getElementById("book-description-input")

//AddBook Yappalaam Click agutho apploom

addBook.addEventListener("click",function(event){
    event.preventDefault()
    let div = document.createElement("div")
    div.setAttribute("class" , "book-container")
    div.innerHTML = ` <h2>${bookTitleInput.value} </h2>
            <h5>${bookAuthorInput.value}</h5>
             <p>${bookDescriptionInput.value}</p>
             <button onclick="deleteBook(event)">delete</button>`
    container.append(div)
})

function deleteBook(event)
{
    event.target.parentElement.remove()

}
