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
        // return MessageChannel;
        break;
  }
}

Pizza.prototype.fullOrderCost = function(){

  let sizePrice = this.sizeCost();
  const toppingPrice = this.toppingsCost();
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
  // console.log('data', data);
  let output = "";
  for (const entry of data) {
    output = `${output} ${entry[0]} = ${entry[1]}\n`;
    e.preventDefault();
  }
  log.innerText = output;

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
  
  myPizza.toppings = this.toppings;
  myPizza.toppingsCost(e);

  const size = document.querySelector("input[name='size']:checked").value;
  myPizza.size = size; 
  myPizza.sizeCost(e);
  myPizza.fullOrderCost(e);
  
  const orderCost = myPizza.fullOrderCost();

  let p = document.createElement("p");
  p.style.display = "block";
  let display = `Your selections are:\n ${output} Total cost is $${orderCost}.00`
  p.append(display, output);
  document.querySelector("p").innerText = display;
}
  
function handleFormSubmission(e){
  e.preventDefault();
  myPizza.details(e);
  console.log("myPizza: ", myPizza);
}

window.addEventListener("load", function(){ 
  document.querySelector("form").addEventListener("submit", handleFormSubmission);  
});