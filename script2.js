// javascript dom
//what  is dom? (document object model)

var username = prompt("what is your name?");

//selectors (getElementById, getElementsByClassName,
//getElementsByTagName, querySelector, querySelectorAll)

var header = document.querySelector(".header");

header.innerText = `Hello ${username}, welcome to javascript website`;

var btnReset = document.querySelector(".btn-solid");

btnReset.addEventListener("click", function (){
    alert("You have clicked me");

});

var redBtn = document.querySelector(".red");
var centerCard = document.querySelector(".centered-card");

redBtn.addEventListener("click", function (){
    centerCard.style.background = "rgb(184,16,16)";
});

var greenBtn = document.querySelector(".green");
greenBtn.addEventListener("click", function (){
    centerCard.style.background = "rgb(16, 184, 16)";
})

var blueBtn = document.querySelector(".blue");
blueBtn.addEventListener("click", function (){
    centerCard.style.background = "rgb(16, 16, 184)";
})

