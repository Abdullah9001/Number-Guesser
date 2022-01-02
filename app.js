let btn = document.getElementById("btn");
let output = document.getElementById("outputtext");


var number = [Math.floor(Math.random() * 10)]

btn.addEventListener("click", function() {
  let input = document.getElementById("userInput").value;

  if (input == number) {
    output.innerHTML = `you guessed right..!`

  } else { 
    output.innerHTML = `you got wrong, your number was ${number}`
  }

});





// document.querySelector(".btn").addEventListener("click",
// function(){
//   alert("i got clicked");
// })