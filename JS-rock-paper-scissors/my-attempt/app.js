const rockButton = document.getElementById("rock")
const paperButton = document.getElementById("paper")
const scissorsButton = document.getElementById("scissors")

const items = [
  {
    name: "rock",
    beats: "scissors",
    beatenBy: "paper",
  },
  {
    name: "paper",
    beats: "rock",
    beatenBy: "scissors",
  },
  {
    name: "scissors",
    beats: "paper",
    beatenBy: "rock",
  }
]

rockButton.addEventListener("click", randomSelection)
paperButton.addEventListener("click", randomSelection)
scissorsButton.addEventListener("click", randomSelection)

let result = document.querySelector(".result")
// let computerNumber = parseInt(document.querySelector("#computer-score").innerHTML)

let computerSelection = ""

function randomSelection() {
  let random = items[Math.floor(Math.random() * items.length)]
  document.querySelector(".computer-selection").innerText = 
  ` Your choice: ${this.id}
  Your opponent: ${random.name} `
  computerSelection = random.name
  // console.log("computerSelection: ", computerSelection)

  // theGame() part
  console.log("this.id:", this.id, " ///  computerSelection:", computerSelection)

  if(this.id == items[0].name && computerSelection == items[0].beats) {
    console.log("you won")
    youWon()
    parseInt(document.querySelector("#your-score").innerHTML)
    document.querySelector("#your-score").innerHTML++
  }
  if(this.id == items[1].name && computerSelection == items[1].beats) {
    console.log("you won")
    youWon()
    parseInt(document.querySelector("#your-score").innerHTML)
    document.querySelector("#your-score").innerHTML++
  }
  if(this.id == items[2].name && computerSelection == items[2].beats) {
    console.log("you won")
    youWon()
    parseInt(document.querySelector("#your-score").innerHTML)
    document.querySelector("#your-score").innerHTML++
  }
  if(this.id == computerSelection) {
    console.log("draw")
    draw()
  }
  if(this.id == "rock" && computerSelection == items[0].beatenBy) {
    console.log("you lost")
    youLost()
    parseInt(document.querySelector("#computer-score").innerHTML)
    document.querySelector("#computer-score").innerHTML++
  }
  if(this.id == "paper" && computerSelection == items[1].beatenBy) {
    console.log("you lost")
    youLost()
    parseInt(document.querySelector("#computer-score").innerHTML)
    document.querySelector("#computer-score").innerHTML++
  }
  if(this.id == "scissors" && computerSelection == items[2].beatenBy) {
    console.log("you lost")
    youLost()
    parseInt(document.querySelector("#computer-score").innerHTML)
    document.querySelector("#computer-score").innerHTML++
  }
}

// function theGame() {console.log("theGame fonksiyonu computerSelection:", computerSelection)}
//   // console.log(this.id) // 1 saat uğraşıp buraya kadar yazdım ve artık konsolda çıkıyor id
//   if(this.id == "rock" && computerSelection == items[0].beats) {
//     console.log("you won")
//     youWon()
//     parseInt(document.querySelector("#your-score").innerHTML)
//     document.querySelector("#your-score").innerHTML++
//   }
//   if(this.id == "paper" && computerSelection == items[1].beats) {
//     console.log("you won")
//     youWon()
//     parseInt(document.querySelector("#your-score").innerHTML)
//     document.querySelector("#your-score").innerHTML++
//   }
//   if(this.id == "scissors" && computerSelection == items[2].beats) {
//     console.log("you won")
//     youWon()
//     parseInt(document.querySelector("#your-score").innerHTML)
//     document.querySelector("#your-score").innerHTML++
//   }
//   if(this.id == computerSelection) {
//     console.log("draw")
//     draw()
//   }
//   if(this.id == "rock" && computerSelection == items[0].beatenBy) {
//     console.log("you lost")
//     youLost()
//     parseInt(document.querySelector("#computer-score").innerHTML)
//     document.querySelector("#computer-score").innerHTML++
//   }
//   if(this.id == "paper" && computerSelection == items[1].beatenBy) {
//     console.log("you lost")
//     youLost()
//     parseInt(document.querySelector("#computer-score").innerHTML)
//     document.querySelector("#computer-score").innerHTML++
//   }
//   if(this.id == "scissors" && computerSelection == items[2].beatenBy) {
//     console.log("you lost")
//     youLost()
//     parseInt(document.querySelector("#computer-score").innerHTML)
//     document.querySelector("#computer-score").innerHTML++
//   }
// }

function youWon() {
  result.innerHTML = `<span style="color: green;">You Won</span>`
}

function youLost() {
  result.innerHTML = `<span style="color: red;">You Lost</span>`
}

function draw() {
  result.innerHTML = `<span style="color: yellow;">Draw</span>`
} 

// I tried to solve the problem that it always displays the result of the previous game, but didn't work 





//sanırım sorunu anladım orda rakibin hamlesi gösterildiğinde bizim hamlemiz yapılmış olmuyor yani rakibin hamlesini gördükten sonra biz hamle yapıyoruz aslında sonradan puan ekleme veya sonuç gösterme tarzı bir durum yok

/*
const invokeMe = () => console.log('I live here outside the scope');
const alsoInvokeMe = () => console.log('I also live outside the scope'); 

element.addEventListener('event',() => {    
     invokeMe();
     alsoInvokeMe();    
});

tek addEventListener ile 2 fonksiyonu aynı anda execute ettim ama bu da işe yaramadı; bu sefer alt tarafta ve konsolda you won you lost falan yazmıyor.
*/




/*--------------------------------------------------------------------------------------------------------------*/

/*

This code is a complete mess. Try to ignore explanation lines because it can be difficult to understand as I edited the code countless times and wrote Turkish and English at the same time. Anyways, thank you for reading this.

By the way, the summary of this code is: I tried to make this game work by using 2 functions named "randomSelection" and "theGame". Basically, randomSelection function chooses a random object from the array named items and returns it as "computerSelection". theGame function decides who wins and displays the result by using if structures. The problem was I couldn't display the current value of let variable named "computerSelection". I tried many things and in the end, I merged these 2 functions into "randomSelection", then it worked. Even now this code is not good enough but this is what I could do.

*/

/*--------------------------------------------------------------------------------------------------------------*/
















