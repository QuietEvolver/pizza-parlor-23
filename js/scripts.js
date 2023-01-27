/*
Allow the user to choose toppings and size for the pizza they'd like to order.
Create a pizza object constructor with properties for toppings and size.
Create a prototype method for the cost of a pizza depending on the selections chosen. Use your own formula for this.
*/

function Pizza(size){
  this.toppings = [];
  this.size = size;
} 

// toppings = ["mushrooms", "anchovies", "pineapple"];
// size = ["small", "medium", "large"];

Pizza.prototype.details = (e) => {
  e.preventDefault();
  const form = document.querySelector("form");
  const log = document.querySelector("#log");

  const data = new FormData(form);
  console.log("e.target.form", e.target.form);
  let output = "";
  for (const entry of data) {
    output = `Your order detail: ${output} ${entry[0]} = ${entry[1]}`
    console.log("Output: ", output);  
    e.preventDefault();
  }
  log.innerText = output;
}

const myPizza = new Pizza(); // mock db
  
function handleFormSubmission(e){

  myPizza.details(e);
  console.log("myPizza: ", myPizza);
  e.preventDefault();
}

window.addEventListener("load", function(){ 
  document.querySelector("form").addEventListener("submit", handleFormSubmission);  
});