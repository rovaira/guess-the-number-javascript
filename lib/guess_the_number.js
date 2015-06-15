var number = Math.floor((Math.random() * 100) + 1);

var name = prompt("What's your name?");

var input = prompt("Enter a number between 1 and 100");

if (number == input) {
  console.log(name.toUpperCase() + ", the number was " + number + ". You won!")
  alert(name.toUpperCase() + ", the number was " + number + ". You won!")
} else {
  console.log(name.toUpperCase() + ", the number was " + number + ". You lost!")
  alert(name.toUpperCase() + ", the number was " + number + ". You lost!")
}
