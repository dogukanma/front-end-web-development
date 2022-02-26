let userName = prompt("İsminizi Giriniz.")
document.querySelector("span#myName").innerHTML = userName

setInterval(showTime, 1000)
function showTime() {
let date = new Date()
date.setFullYear(2022, 02, 26)
let numberDay = date.getDate()
let month = date.getMonth()
let year = date.getFullYear()
let hour = date.getHours()
let minute = date.getMinutes()
let second = date.getSeconds()

let days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]
let weekday = days[ date.getDay() ]

let clock = document.querySelector("div#myClock")
let bigDate = document.querySelector("div#date")

numberDay = (numberDay < 10) ? "0" + numberDay : numberDay
month = (month < 10) ? "0" + month : month

hour = (hour < 10) ? "0" + hour : hour
minute = (minute < 10) ? "0" + minute : minute
second = (second < 10) ? "0" + second : second

bigDate.innerHTML = 
`${numberDay}/${month}/${year}`

clock.innerHTML = 
`${hour}:${minute}:${second} ${weekday}`
}