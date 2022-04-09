const btnContainer = document.querySelector(".btn-container")
const menuContainer = document.querySelector(".section-center")

listAllFoods();

// We are creating the buttons by giving id

const createButton = (btnName) => {
  let btn = `<button type="button id="${btnName}" class="btn btn-outline-dark btn-item">${btnName}</>`
  return btn
}

// Adding the buttons to UI part

const addButtonsToUI = () => {
  btnContainer.innerHTML = 
  createButton("All") + " " +
  createButton("Korean") + " " +
  createButton("Japanese") + " " +
  createButton("Chinese")
}

addButtonsToUI()

// Button event listeners

const btnAll = document.querySelector("#All").addEventListener("click", listAllFoods)
const btnKorean = document.querySelector("#Korean").addEventListener("click", listKoreanFoods)
const btnJapanese = document.querySelector("#Japanese").addEventListener("click", listJapaneseFoods)
const btnChinese = document.querySelector("#Chinese").addEventListener("click", listChineseFoods)

// Lists all foods when the page is loaded and works by triggered all button

function listAllFoods() {
  let allMenu = "";
  menu.map((x) => {
    allMenu += createObject(x)
  })
  menuContainer.innerHTML = allMenu
}

// Lists Korean foods

function listKoreanFoods() {
  let allMenu = ""
  menu.map((x) => {
    if (x.category == "Korea") {
      allMenu += createObject(x)
    }
  })
  menuContainer.innerHTML = allMenu
}

// Lists Japanese Foods

function listJapaneseFoods() {
  let allMenu = ""
  menu.map((x) => {
    if (x.category == "Japanese")
    allMenu += createObject(x)
  })
  menuContainer.innerHTML = allMenu
}

// Lists Chinese Foods

function listChineseFoods() {
  let allMenu = ""
  menu.map((x) => {
    if (x.category == "Chinese")
    allMenu += createObject(x)
  })
  menuContainer.innerHTML = allMenu
}

// Creates only one food's body

function createObject(food){
  let item = `
  <div class="menu-items col-lg-6 col-sm-12">
    <img src="${food.img}" alt="${food.title}" ramen="" class="photo">
    <div class="menu-info">
      <div class="menu-title">
      <h4>${food.title}</h4>
      <h4 class="price">${food.price}</h4>
    </>
    <div class="menu-text">
    ${food.desc}
    </>
    </>
    </>
  `
  return item
}



