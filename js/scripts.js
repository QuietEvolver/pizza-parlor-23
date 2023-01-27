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
function handleFormSubmission(e){

  const log = document.querySelector("log");
  const data = new FormData(form);
  let output = "";
  for (const entry of data) {
    output = `${output}${entry[0]}=${entry[1]}`
  }
  log.inneText = output;
  e.preventDefault();
}

window.addEventListener("load", function(){ // #pizza-form
let form =  document.querySelector("form")
form.addEventListener("submit", handleFormSubmission);
  
});