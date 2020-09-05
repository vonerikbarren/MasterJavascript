// This is Output1.js This is a playground for practicing output js functions. 

// JS-1A - Output - Javascript Display Possibilities

let x = 20
let y = 5
let z = 100

let a = x + y;
let b = y + z;
let c = x + z;



document.getElementById("idTest").innerHTML = x + y;
document.getElementById("classTest").innerHTML = a - z;
document.getElementsByClassName("classTest").innerHTML = a - x;


let w = document.getElementsByClassName("demo").innerHTML = a - x;
console.log(w);

// -+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
// --> Testing of getElementByClassName() <--
// -+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-

function myTestFunction() {
  var list = document.getElementsByClassName("example")[0];
  list.getElementsByClassName("drink")[0].innerHTML = "Milk";
}

function lengthFunction() {
  var x = document.getElementById("myDIV").getElementsByClassName("child");
  document.getElementById("answer").innerHTML = x.length;
}









