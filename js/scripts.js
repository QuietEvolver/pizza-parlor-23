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
  // let price = this.price; 
  // let toppings = this.toppings;
  // price = (toppings.length) * 3;
  // return price;

    // Set empty array for toppings // 
    let toppingArr = [];  // this.t

    // Add each topping to array
    for (const [key, value] of data) {
      if (key === "toppings") {
        toppingArr.push(value);
      }
    }
  ///
}

Pizza.prototype.sizeCost = function() {
  let size = this.size; 
  // let msg = "Choose an option";
  // switch(size){
  //   case("small"): 
  //     console.log("Small");
  //     return 5;
  //   case("medium"): 
  //     console.log("med");
  //     return 10;
  //   case("large"):
  //     console.log("lg");
  //     return 15;
  //   default: 
  //   console.log("Choose a sz");
    // output.innerHTML = msg;  // webAPI: MessageChannel; 
  // }
    /**/  
   ////////////////////////////// 
  let sizePrice = null;
  // let size = null;
  size = null;

  // Add each topping to array
  for (const [key, value] of data) {
  
    if (key === "size") {
      this.size = value;
     // size = value;
    }
    if (key === "size" && value === "small") {
      sizePrice = 5;
    }
    if (key === "size" && value === "medium") {
      sizePrice = 10;
    }
    if (key === "size" && value === "large") {
      sizePrice = 15;
      
    } 
    return sizePrice;
  }
}

Pizza.prototype.fullOrderCost = function(){
  // // Pizza.prototype.cost() + Pizza.prototype.sizeCost();
  // let toppings = this.toppings.length;
  // let size =  Pizza.prototype.sizeCost(this.size);
  // console.log("Toppings/Cost: ", toppings, size);
  // // this.price = this.toppings + this.size; // 'anchovies,pineapplemedium'
  // this.price = toppings + size;
  // return this.price;
////////////////////////////////
  // Calculate price of pizza
  // const toppingPrice = toppingArr.length * 3;
  const toppingPrice = this.toppings.length * 3;
  const totalPrice = toppingPrice + sizePrice;
  console.log('totalPrice', totalPrice);

}


// const data = new FormData(form);
// console.log('data', data);




// Utility
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