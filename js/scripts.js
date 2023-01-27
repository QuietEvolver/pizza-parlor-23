/*
Create a pizza object constructor with properties for toppings and size.
Create a prototype method for the cost of a pizza depending on the selections chosen. Use your own formula for this.
*/

function Pizza(size){
  this.toppings = [];
  this.size = size;
} 

Pizza.prototype.details = (e) => {
  e.preventDefault();
  const form = document.querySelector("form");
  const log = document.querySelector("#log");

  const data = new FormData(form);
  let output = "";
  for (const entry of data) { // 
    output = `${output} ${entry[0]} = ${entry[1]}\n`
    console.log("Output: ", output);  
    console.log("Entry: ", entry); 
     
    e.preventDefault();
  }
  log.innerText = output;
  // setTimeout(output, 3000);
  // console.log("output: ", output);

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