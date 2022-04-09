const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:"https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:"https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:"https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:"https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:"https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:"https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:"https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:"https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:"https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

// I created lets for all buttons I created in html part
let foodAll = document.querySelector("#buttonAll")
let foodJapanese = document.querySelector("#buttonJapanese")
let foodKorean = document.querySelector("#buttonKorean")
let foodChinese = document.querySelector("#buttonChinese")
let foodSection = document.querySelector(".section-center")

// addEventListener to display all foods
foodAll.addEventListener("click", showAll)

function showAll() {
 let item0 = document.createElement("div") // we created a div in order to use appendChild later
 item0.classList.add("col-lg-6")
 item0.classList.add("col-sm-12")
 
 // I tried to write the first div into this part but a string can't be appended
 item0.innerHTML =  ` 
 <img src="${menu[0].img}" alt="${menu[0].title}" class="photo">
 <div class="menu-info">
  <div class="menu-title">
   <h4>${menu[0].title}</>
   <h4 class="price">${menu[0].price}</>
  </>
  <div class="menu-text">
  <h5 class="text-dark">${menu[0].desc}</>
  </>
 </>
</>
`
// I've written the part below in order to prevent foods to display more than once
if(!(foodSection.classList.contains("Tteokbokki"))){ // Basically, if we displayed tteokbokki, we add a class
foodSection.classList.add("Tteokbokki") // This way, item0 is being appended only if it wasn't already.
foodSection.appendChild(item0)
}

let item1 = document.createElement("div")
 item1.classList.add("col-lg-6")
 item1.classList.add("col-sm-12")
 item1.innerHTML =  `
<img src="${menu[1].img}" alt="${menu[1].title}" class="photo">
<div class="menu-info">
 <div class="menu-title">
  <h4>${menu[1].title}</>
  <h4 class="price">${menu[1].price}</>
 </>
 <div class="menu-text">
 <h5 class="text-dark">${menu[1].desc}</>
 </>
</>
</>
`
if(!(foodSection.classList.contains("Chicken-Ramen"))){
foodSection.classList.add("Chicken-Ramen")
foodSection.appendChild(item1)
}
let item2 = document.createElement("div")
 item2.classList.add("col-lg-6")
 item2.classList.add("col-sm-12")
 
 item2.innerHTML =  `
 <img src="${menu[2].img}" alt="${menu[2].title}" class="photo">
 <div class="menu-info">
  <div class="menu-title">
   <h4>${menu[2].title}</>
   <h4 class="price">${menu[2].price}</>
  </>
  <div class="menu-text">
  <h5 class="text-dark">${menu[2].desc}</>
  </>
 </>
</>
`
if(!(foodSection.classList.contains("Bibimbap"))){
foodSection.classList.add("Bibimbap")
foodSection.appendChild(item2)
}

let item3 = document.createElement("div")
 item3.classList.add("col-lg-6")
 item3.classList.add("col-sm-12")
 
 item3.innerHTML =  `
 <img src="${menu[3].img}" alt="${menu[3].title}" class="photo">
 <div class="menu-info">
  <div class="menu-title">
   <h4>${menu[3].title}</>
   <h4 class="price">${menu[3].price}</>
  </>
  <div class="menu-text">
  <h5 class="text-dark">${menu[3].desc}</>
  </>
 </>
</>
`
if(!(foodSection.classList.contains("Dan-Dan-Mian"))){
foodSection.classList.add("Dan-Dan-Mian")
foodSection.appendChild(item3)
}

let item4 = document.createElement("div")
 item4.classList.add("col-lg-6")
 item4.classList.add("col-sm-12")
 
 item4.innerHTML =  `
 <img src="${menu[4].img}" alt="${menu[4].title}" class="photo">
 <div class="menu-info">
  <div class="menu-title">
   <h4>${menu[4].title}</>
   <h4 class="price">${menu[4].price}</>
  </>
  <div class="menu-text">
  <h5 class="text-dark">${menu[4].desc}</>
  </>
 </>
</>
`
if(!(foodSection.classList.contains("Yangzhou-Fried-Rice"))){
foodSection.classList.add("Yangzhou-Fried-Rice")
foodSection.appendChild(item4)
}

let item5 = document.createElement("div")
 item5.classList.add("col-lg-6")
 item5.classList.add("col-sm-12")
 
 item5.innerHTML =  `
 <img src="${menu[5].img}" alt="${menu[5].title}" class="photo">
 <div class="menu-info">
  <div class="menu-title">
   <h4>${menu[5].title}</>
   <h4 class="price">${menu[5].price}</>
  </>
  <div class="menu-text">
  <h5 class="text-dark">${menu[5].desc}</>
  </>
 </>
</>
`
if(!(foodSection.classList.contains("Onigiri"))){
foodSection.classList.add("Onigiri")
foodSection.appendChild(item5)
}

let item6 = document.createElement("div")
 item6.classList.add("col-lg-6")
 item6.classList.add("col-sm-12")
 
 item6.innerHTML =  `
 <img src="${menu[6].img}" alt="${menu[6].title}" class="photo">
 <div class="menu-info">
  <div class="menu-title">
   <h4>${menu[6].title}</>
   <h4 class="price">${menu[6].price}</>
  </>
  <div class="menu-text">
  <h5 class="text-dark">${menu[6].desc}</>
  </>
 </>
</>
`
if(!(foodSection.classList.contains("Jajangmyeon"))){
foodSection.classList.add("Jajangmyeon")
foodSection.appendChild(item6)
}

let item7 = document.createElement("div")
 item7.classList.add("col-lg-6")
 item7.classList.add("col-sm-12")
 
 item7.innerHTML =  `
 <img src="${menu[7].img}" alt="${menu[7].title}" class="photo">
 <div class="menu-info">
  <div class="menu-title">
   <h4>${menu[7].title}</>
   <h4 class="price">${menu[7].price}</>
  </>
  <div class="menu-text">
  <h5 class="text-dark">${menu[7].desc}</>
  </>
 </>
</>
`
if(!(foodSection.classList.contains("Ma-Yi-Shang-Shu"))){
foodSection.classList.add("Ma-Yi-Shang-Shu")
foodSection.appendChild(item7)
}

let item8 = document.createElement("div")
 item8.classList.add("col-lg-6")
 item8.classList.add("col-sm-12")
 
 item8.innerHTML =  `
 <img src="${menu[8].img}" alt="${menu[8].title}" class="photo">
 <div class="menu-info">
  <div class="menu-title">
   <h4>${menu[8].title}</>
   <h4 class="price">${menu[8].price}</>
  </>
  <div class="menu-text">
  <h5 class="text-dark">${menu[8].desc}</>
  </>
 </>
</>
`
if(!(foodSection.classList.contains("Doroyaki"))){
foodSection.classList.add("Doroyaki")
foodSection.appendChild(item8)
}
}

foodJapanese.addEventListener("click", showJapanese)
function showJapanese(){
// I needed to remove all the classes manually because the previous if structure would prevent displaying foods
  foodSection.classList.remove("Tteokbokki", "Chicken-Ramen", "Bibimbap", "Dan-Dan-Mian", "Yangzhou-Fried-Rice")
  foodSection.classList.remove("Onigiri", "Jajangmyeon", "Ma-Yi-Shang-Shu", "Doroyaki")
  foodSection.innerHTML = "" // we cleaned the food section
  
  let item1 = document.createElement("div")
 item1.classList.add("col-lg-6")
 item1.classList.add("col-sm-12")
 item1.innerHTML =  `
<img src="${menu[1].img}" alt="${menu[1].title}" class="photo">
<div class="menu-info">
 <div class="menu-title">
  <h4>${menu[1].title}</>
  <h4 class="price">${menu[1].price}</>
 </>
 <div class="menu-text">
 <h5 class="text-dark">${menu[1].desc}</>
 </>
</>
</>
`
if(!(foodSection.classList.contains("Chicken-Ramen"))){
foodSection.classList.add("Chicken-Ramen")
foodSection.appendChild(item1)
}
  
let item5 = document.createElement("div")
 item5.classList.add("col-lg-6")
 item5.classList.add("col-sm-12")
 
 item5.innerHTML =  `
 <img src="${menu[5].img}" alt="${menu[5].title}" class="photo">
 <div class="menu-info">
  <div class="menu-title">
   <h4>${menu[5].title}</>
   <h4 class="price">${menu[5].price}</>
  </>
  <div class="menu-text">
  <h5 class="text-dark">${menu[5].desc}</>
  </>
 </>
</>
`
if(!(foodSection.classList.contains("Onigiri"))){
foodSection.classList.add("Onigiri")
foodSection.appendChild(item5)
}

let item8 = document.createElement("div")
 item8.classList.add("col-lg-6")
 item8.classList.add("col-sm-12")
 
 item8.innerHTML =  `
 <img src="${menu[8].img}" alt="${menu[8].title}" class="photo">
 <div class="menu-info">
  <div class="menu-title">
   <h4>${menu[8].title}</>
   <h4 class="price">${menu[8].price}</>
  </>
  <div class="menu-text">
  <h5 class="text-dark">${menu[8].desc}</>
  </>
 </>
</>
`
if(!(foodSection.classList.contains("Doroyaki"))){
foodSection.classList.add("Doroyaki")
foodSection.appendChild(item8)
}

}


foodKorean.addEventListener("click", showKorean)
function showKorean(){
  foodSection.classList.remove("Tteokbokki", "Chicken-Ramen", "Bibimbap", "Dan-Dan-Mian", "Yangzhou-Fried-Rice")
  foodSection.classList.remove("Onigiri", "Jajangmyeon", "Ma-Yi-Shang-Shu", "Doroyaki")
  foodSection.innerHTML = ""

  let item0 = document.createElement("div")
  item0.classList.add("col-lg-6")
  item0.classList.add("col-sm-12")
  
  item0.innerHTML =  `
  <img src="${menu[0].img}" alt="${menu[0].title}" class="photo">
  <div class="menu-info">
   <div class="menu-title">
    <h4>${menu[0].title}</>
    <h4 class="price">${menu[0].price}</>
   </>
   <div class="menu-text">
   <h5 class="text-dark">${menu[0].desc}</>
   </>
  </>
 </>
 `
 if(!(foodSection.classList.contains("Tteokbokki"))){
 foodSection.classList.add("Tteokbokki")
 foodSection.appendChild(item0)
 }

 let item2 = document.createElement("div")
 item2.classList.add("col-lg-6")
 item2.classList.add("col-sm-12")
 
 item2.innerHTML =  `
 <img src="${menu[2].img}" alt="${menu[2].title}" class="photo">
 <div class="menu-info">
  <div class="menu-title">
   <h4>${menu[2].title}</>
   <h4 class="price">${menu[2].price}</>
  </>
  <div class="menu-text">
  <h5 class="text-dark">${menu[2].desc}</>
  </>
 </>
</>
`
if(!(foodSection.classList.contains("Bibimbap"))){
foodSection.classList.add("Bibimbap")
foodSection.appendChild(item2)
}

let item6 = document.createElement("div")
 item6.classList.add("col-lg-6")
 item6.classList.add("col-sm-12")
 
 item6.innerHTML =  `
 <img src="${menu[6].img}" alt="${menu[6].title}" class="photo">
 <div class="menu-info">
  <div class="menu-title">
   <h4>${menu[6].title}</>
   <h4 class="price">${menu[6].price}</>
  </>
  <div class="menu-text">
  <h5 class="text-dark">${menu[6].desc}</>
  </>
 </>
</>
`
if(!(foodSection.classList.contains("Jajangmyeon"))){
foodSection.classList.add("Jajangmyeon")
foodSection.appendChild(item6)
}

}

foodChinese.addEventListener("click", showChinese)
function showChinese(){
  foodSection.classList.remove("Tteokbokki", "Chicken-Ramen", "Bibimbap", "Dan-Dan-Mian", "Yangzhou-Fried-Rice")
  foodSection.classList.remove("Onigiri", "Jajangmyeon", "Ma-Yi-Shang-Shu", "Doroyaki")
  foodSection.innerHTML = ""

  let item3 = document.createElement("div")
  item3.classList.add("col-lg-6")
  item3.classList.add("col-sm-12")
  
  item3.innerHTML =  `
  <img src="${menu[3].img}" alt="${menu[3].title}" class="photo">
  <div class="menu-info">
   <div class="menu-title">
    <h4>${menu[3].title}</>
    <h4 class="price">${menu[3].price}</>
   </>
   <div class="menu-text">
   <h5 class="text-dark">${menu[3].desc}</>
   </>
  </>
 </>
 `
 if(!(foodSection.classList.contains("Dan-Dan-Mian"))){
 foodSection.classList.add("Dan-Dan-Mian")
 foodSection.appendChild(item3)
 }

 let item4 = document.createElement("div")
 item4.classList.add("col-lg-6")
 item4.classList.add("col-sm-12")
 
 item4.innerHTML =  `
 <img src="${menu[4].img}" alt="${menu[4].title}" class="photo">
 <div class="menu-info">
  <div class="menu-title">
   <h4>${menu[4].title}</>
   <h4 class="price">${menu[4].price}</>
  </>
  <div class="menu-text">
  <h5 class="text-dark">${menu[4].desc}</>
  </>
 </>
</>
`
if(!(foodSection.classList.contains("Yangzhou-Fried-Rice"))){
foodSection.classList.add("Yangzhou-Fried-Rice")
foodSection.appendChild(item4)
}

let item7 = document.createElement("div")
 item7.classList.add("col-lg-6")
 item7.classList.add("col-sm-12")
 
 item7.innerHTML =  `
 <img src="${menu[7].img}" alt="${menu[7].title}" class="photo">
 <div class="menu-info">
  <div class="menu-title">
   <h4>${menu[7].title}</>
   <h4 class="price">${menu[7].price}</>
  </>
  <div class="menu-text">
  <h5 class="text-dark">${menu[7].desc}</>
  </>
 </>
</>
`
if(!(foodSection.classList.contains("Ma-Yi-Shang-Shu"))){
foodSection.classList.add("Ma-Yi-Shang-Shu")
foodSection.appendChild(item7)
}

}

/*
 I know this is not a proper way to accomplish this project but at least it worked. I tried to explain the codes
 in English but I'm sure that there are many mistakes that I didn't notice. Thanks for reading :)
*/