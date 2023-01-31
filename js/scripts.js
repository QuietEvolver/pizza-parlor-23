function Pizza(){
  this.toppings = [];
  this.size = "";
  this.price = 0;
} 

Pizza.prototype.toppingsCost = function() {
  const toppingPrice = this.toppings.length * 3;
  return toppingPrice;
}

Pizza.prototype.sizeCost = function() {
  let size = this.size;
  // if(Object.keys(size)){
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
    // }
  }
}

Pizza.prototype.fullOrderCost = function(){

  let sizePrice = this.sizeCost();
  const toppingPrice = this.toppingsCost();
  console.log("this.toppings - toppingsPrice ", toppingPrice);
  console.log("this.sizePrice ", sizePrice);
  this.price = toppingPrice + sizePrice;
  return this.price;
}

const myPizza = new Pizza(); // mock db

// Utility
Pizza.prototype.details = (e) => {
  e.preventDefault();
  const form = document.querySelector("form");
  const log = document.querySelector("#log");
 // TODO: ASK Calvin: How do i FormData.set() for my Object.entries()..?
  const data = new FormData(form);
  console.log('data', data);
  let output = "";
  for (const entry of data) {
    output = `${output} ${entry[0]} = ${entry[1]}\n`;
    e.preventDefault();
  }
  log.innerText = output;

  // checkbox Selection
  //const toppings = document.querySelector("input[name='toppings']:checked").value;
  this.toppings = [];
  if(document.getElementById("mushrooms").checked===true){
    toppings.push("mushrooms");
  } 
  if(document.getElementById("anchovies").checked===true){
    toppings.push("anchovies");
  } 
  if(document.getElementById("pineapple").checked===true){
    toppings.push("pineapple");
  } 
  // toppingsArr.push(toppings); this.toppings,
  myPizza.toppings = this.toppings;
  console.log("this.toppings: ", myPizza.toppings);
  myPizza.toppingsCost(e);
  console.log("myPizza.toppingsCost(e)", myPizza.toppingsCost(e));
  console.log("my.topping ", myPizza.toppings);
  /////////toppings///////////
  // Set empty array for toppings 
  // let toppingArr = []; 
  // console.log("tarr", toppingArr);
  // // Add each topping to array
  // for (const [key, value] of data) {
  //   if (key === "toppings") {
  //     toppingArr.push(value);
  //   }
  // }
  //////////////////// radioSelection capture(d)
  const size = document.querySelector("input[name='size']:checked").value;
  myPizza.size = size;
  console.log("myPizza.size: ", size); 
  myPizza.sizeCost(e);
  console.log("my.size ", myPizza.sizes);
   // cost
  myPizza.fullOrderCost(e);
  console.log("myPizza.fullOrderCost(e)", myPizza.fullOrderCost(e));
  console.log("this.price", this.price);
}

  
function handleFormSubmission(e){
  e.preventDefault();
// CONST RADIO AND CHECKBOXES
  myPizza.details(e);
  console.log("myPizza: ", myPizza);

}

window.addEventListener("load", function(){ 
  document.querySelector("form").addEventListener("submit", handleFormSubmission);  
});