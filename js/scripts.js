/*
- Allow the user to choose toppings and size for the pizza they'd like to order.
- Create a pizza object constructor with properties for toppings and size.
- Create a prototype method for the cost of a pizza depending on the selections chosen. Use your own formula for this.
*/

/*
let myPizza = new Pizza();
myPizza.toppings = ["anchovies", "pineapple"];
myPizza.size = "medium"; */
function Pizza(){
  this.toppings = [];
  this.size = "";
  this.price = 0;
} 

// WKG: Create a prototype method for the cost of a pizza 
Pizza.prototype.toppingsCost = function() {
  // let data = this.toppings;

  // // Set empty array for toppings // 
  // let toppingArr = []; 

  // // Add each topping to array
  // for (const [ value] of data) {
  //   // for (const [key, value] of data) {
  //   if (key === "toppings") {
  //     toppingArr.push(value);
  //   }
  // }

  const toppingPrice = this.toppings.length * 3;
  return toppingPrice;
}

Pizza.prototype.sizeCost = function() {
  // let data = this.size;
  let size = this.size;
  if(Object.keys(size)){
    switch(size){
      case("small"): 
        this.size = "small";
        sizePrice = 5;
        return sizePrice;
      case("medium"): 
        this.size = "medium";
        sizePrice = 10;
        return sizePrice;
      case("large"):
        this.size = "large";
        sizePrice = 15;
        return sizePrice;
      default: 
    }
  }
}

Pizza.prototype.fullOrderCost = function(){

  let sizePrice = this.sizeCost();
  const toppingPrice = this.toppingsCost();
  console.log("this.toppings - toppingsPrice ", toppingPrice);
  console.log("this.sizePrice ", sizePrice);
  const totalPrice = toppingPrice + sizePrice;
  console.log('totalPrice', totalPrice);
  return totalPrice;
}


// // Utility
// Pizza.prototype.details = (e) => {
//   e.preventDefault();
//   const form = document.querySelector("form");
//   const log = document.querySelector("#log");

//   const data = new FormData(form);
// console.log('data', data);
//   let output = "";
//   for (const entry of data) {
//     output = `${output} ${entry[0]} = ${entry[1]}\n`;
//     e.preventDefault();
//   }
//   log.innerText = output;
// }

//  const myPizza = new Pizza(); // mock db
  
// function handleFormSubmission(e){
// // CONST RADIO AND CHECKBOXES
//   myPizza.details(e);
//   myPizza.toppingsCost(e);
//   console.log("myPizza.toppingsCost(e)", myPizza.toppingsCost(e));
//   console.log("my.topping ", myPizza.toppings);
//   console.log("my.size ", myPizza.sizes);
//   myPizza.totalPrice(e);
//   console.log("myPizza.totalPrice(e)", myPizza.totalPrice(e));

//   console.log("myPizza: ", myPizza);

//   e.preventDefault();
// }

// window.addEventListener("load", function(){ 
//   document.querySelector("form").addEventListener("submit", handleFormSubmission);  
// });