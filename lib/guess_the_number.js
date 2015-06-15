var number = Math.floor((Math.random() * 100) + 1);

console.log(number)

var name = prompt("What's your name?");

var input = prompt("Enter a number between 1 and 100");


if (number == input) {
  console.log(name.toUpperCase() + ", you won!")
  alert(name.toUpperCase() + ", you won!")
} else {
  console.log(name.toUpperCase() + ", you lost!")
  alert(name.toUpperCase() + ", you lost!")
}
