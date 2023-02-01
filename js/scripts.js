function Pizza(){
  this.toppings = [];
  this.size = "";
  this.price = 0;
} 

Pizza.prototype.toppingsCost = function() {
  // let toppings = this.toppings;
  let toppingArr = []; 

  // Add each topping to array
  for (const [key, value] of data) {
    if (key === "toppings") {
      toppingArr.push(value);
    }
  }
}

Pizza.prototype.sizeCost = function() {
  // Add each size
  let value = this.size; 
  for (const [key, value] of data) {
    if (key === "size") {
      size = value;
    }
    // let msg = "Choose an option";
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
      console.log("Choose a sz");
      // output.innerHTML = msg;  // webAPI: MessageChannel; 
    }
  }
// }

    /**/  
   /////////////HOW TO ISOLATE TOPPINGS/SIZE IF KEY = this ///////////////// 
  /* let sizePrice = null;
  // let size = null;

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
  }*/
}

Pizza.prototype.fullOrderCost = function(){
  let sizePrice = myPizza.sizeCost();
  const toppingPrice = this.toppings.length * 3;
  console.log("this.toppings - toppingsPrice ", toppingPrice);
  const totalPrice = toppingPrice + sizePrice;
  console.log('totalPrice', totalPrice);
}

// Utility
Pizza.prototype.details = (e) => {
  e.preventDefault();
  const form = document.querySelector("form");
  const log = document.querySelector("#log");

  const data = new FormData(form);
  let output = "";
  for (const entry of data.entries()) {  
    // output = `${output} ${entry[0]} = ${entry[1]}\n`;
    output = `${output} ${entry[0]} = ${entry[1]}\n`;
    console.log("entry(ies) ", output);
    e.preventDefault();
  }
  log.innerText = output;
}

const myPizza = new Pizza(); // mock db
  
function handleFormSubmission(e){
// CONST RADIO AND CHECKBOXES
  myPizza.details(e);

  console.log("myPizza: ", myPizza);

  e.preventDefault();
}

window.addEventListener("load", function(){ 
  document.querySelector("form").addEventListener("submit", handleFormSubmission);  
});