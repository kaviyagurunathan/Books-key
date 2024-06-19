var popupoverlay = document.querySelector(".popup-overlay")

var popupbox = document.querySelector(".popup-box")

var addpopupbutton = document.getElementById("add-popup-button")



addpopupbutton.addEventListener("click",function(){

    popupoverlay.style.display="block"

    popupbox.style.display="block"
})  


var cancelpopup = document.getElementById("cancel-popup")

cancelpopup.addEventListener("click",function(event){

    event.preventDefault()

    popupoverlay.style.display="none"

    popupbox.style.display="none"
})



var container = document.querySelector(".container")

var addbook = document.getElementById("add-book")

var booktitleinput = document.getElementById("book-title-input")

var bookauthorinput = document.getElementById("book-author-input")

var bookdescreptioninput = document.getElementById("book-description-input")


addbook.addEventListener("click",function(event){

    event.preventDefault()

    var div = document.createElement("div")

    div.setAttribute("class","book-container")

    div.innerHTML=`<h1>${booktitleinput.value}</h1>

    <h3>${bookauthorinput.value}</h3>

    <p>${bookdescreptioninput.value}</p>

    <button onclick="Delete(event)">Delete</button>`

    container.append(div)

    popupoverlay.style.display="none"

    popupbox.style.display="none"
    
})

function Delete(event)
{
    event.target.parentElement.remove()
}
