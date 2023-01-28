/*
- Allow the user to choose toppings and size for the pizza they'd like to order.
- Create a pizza object constructor with properties for toppings and size.
- Create a prototype method for the cost of a pizza depending on the selections chosen. Use your own formula for this.
*/
// let myPizza = new Pizza();
function Pizza(){
  this.toppings = [];
  this.size = "";
  this.price = 0;
} 

// WKG: Create a prototype method for the cost of a pizza 
Pizza.prototype.toppingsCost = function() {
  let price = this.price; 
  let toppings = this.toppings;
  price = (toppings.length) * 3;
  return price;
}

Pizza.prototype.sizeCost = function() {
  let size = this.size; 
  let msg = "Choose an option";
  switch(size){
    case("small"): 
      console.log("Small");
      return 5;
    case("medium"): 
      console.log("med");
      return 10;
    case("large"):
      console.log("lg");
      return 15;
    default: 
    console.log("Choose a sz");
    output.innerHTML = msg;  // webAPI: MessageChannel; 
  }
}

// Pizza.prototype.details = (e) => {
//   e.preventDefault();
//   const form = document.querySelector("form");
//   const log = document.querySelector("#log");

//   const data = new FormData(form);
//   let output = "";
//   for (const entry of data) {
//     output = `${output} ${entry[0]} = ${entry[1]}\n`;
//     e.preventDefault();
//   }
//   log.innerText = output;
// }

// const myPizza = new Pizza(); // mock db
  
// function handleFormSubmission(e){
/// CONST RADIO AND CHECKBOXES
//   myPizza.details(e);

//   console.log("myPizza: ", myPizza);

//   e.preventDefault();
// }

// window.addEventListener("load", function(){ 
//   document.querySelector("form").addEventListener("submit", handleFormSubmission);  
// });