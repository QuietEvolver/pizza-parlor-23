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

  // const form = document.querySelector("form");
  // const log = document.querySelector("log");
  // const data = new FormData(form);
  // console.log("e.target.form", e.target.form);
  // let output = "";
  // for (const entry of data) {
  //   output = `${output}${entry[0]}=${entry[1]}`
  //   console.log("Output: ", output);
  // }
  // log.innerText = output;

  // const toppings = document.querySelector("input[checked:"toppings"]]value")
  e.preventDefault();
}

window.addEventListener("load", function(){ // #pizza-form
  document.querySelector("form").addEventListener("submit", handleFormSubmission);
  
});