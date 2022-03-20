// THIS IS MY FIRST ATTEMPT FOR THIS ASSIGNMENT

// // DOM ATTRIBUTES 
// let inputDOM = document.querySelector("#task")
// let btnDOM = document.querySelector("#liveToastBtn")
// let ulDOM = document.querySelector("#list")
// let spanDOM = document.querySelector(".close")

// // enter = click
// inputDOM.addEventListener("keyup", function(event){
//     if (event.keyCode === 13) {
//         return newElement()
//     }
// })

// // input - ekle butonuna basınca
// function newElement(){
//     let liDOM = document.createElement(`li`)
//     let info = inputDOM.value // inputa girilen bilgiyi info değişkenine atadık
//     info = info.trim() // inputa girilen bilginin başındaki ve sonundaki boşlukları sildik
//     if (info){ // with if structure, we prevented users to submit empty input
//         liDOM.innerHTML = info // yeni oluşacak li elemanının innerHTML'ine input value bilgisini ekledik
//         liDOM.innerHTML += `<span class="close"><i class="fa-solid fa-xmark"></></>`
//         // info varsa x markı da ekle dedik
//         ulDOM.append(liDOM) // oluşacak li elemanını ulye ekledik
//     }
//     else {
        
//     }
//     inputDOM.value = ""
// }

// ulDOM.addEventListener("click", function(item){
//     if(item.target.tagName="li"){
//         item.target.classList.toggle("checked")
//     }
// })

// spanDOM.addEventListener("click", function(){
//     let li = document.querySelector("li")
//     li.style.display="none"
// })

// // let close = document.querySelector(".close")
// // for (var i = 0; i < close.length; i++){
// //     close[i].onclick = function(){
// //         var li = this.parentElement;
// //         li.style.display="none" 
// //     }
// // }

// SECOND ATTEMPT FOR THIS ASSIGNMENT

// let items = ["item 1","item 2","item 3","item 4"]
const listDOM = document.querySelector("#list")

// items.forEach(function(item){
//     newListItem(item)
// })

const inputDOM = document.querySelector("#task")

function newElement(){
    let info = inputDOM.value
    if(info.trim()===""){
        alert("lütfen bir değer giriniz")
        inputDOM.value = ""
    }
    else {
    newListItem(info)
    inputDOM.value = ""
    }
}

inputDOM.addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
   event.preventDefault();
   newElement()
  }
});

function newListItem(item){

    let li = document.createElement("li")
    li.innerHTML = item
    li.className = "list-group-item";
    listDOM.appendChild(li);

    let span = document.createElement("span");
    span.innerHTML = `<i class="fa-solid fa-xmark">`
    span.className = "close"
    li.appendChild(span)
    
    span.onclick = function(){
        let li = this.parentElement
        li.style.display = "none"
    }

    localStorage.setItem(`item ${localStorage.length + 1}`, li.innerText)
}


// var close = document.getElementsByClassName('close')

// for(let i = 0; i < close.length; i++){
//     close[i].onclick = function(){
//         let li = this.parentElement
//         li.style.display = "none"
//     }
// }


// I tried so hard for this removing an item part but could never understand what is wrong with style or sth else
/*
// 2 minutes later, I used getElementsByClassName method instead of using querySelector and it worked and it means
// I tried to make it work again and again for hours just because I didn't know the difference between
// querySelector and getElementsByClassName
*/
// I learned that I didn't have to use for loop
// After getting this part in the description line, I went back to first forEach part and added there


listDOM.addEventListener("click", function(item){ // touch the item text and it will offer you to convert to arrow

    if(item.target.tagName = "li"){
    item.target.classList.toggle("checked")
    }

})

// Unfortunately, this is what I could do. Some expectations are not accomplished such as localStorage part 
