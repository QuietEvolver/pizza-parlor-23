/*
Create a pizza object constructor with properties for toppings and size.
 on the selections chosen. Use your own formula for this.
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

    if(entry[0] === "toppings"){
      output = `Topping: ${output} ${entry[0]} = ${entry[1]}\n`;
    } else if(entry[0] === "size"){
      output = `Size: ${output} ${entry[0]} = ${entry[1]}\n`;
    }
    output = `${output} ${entry[0]} = ${entry[1]}\n`;

    console.log("Output: ", output);  
    console.log("Entry: ", entry); 
    e.preventDefault();
  }
  log.innerText = output;
  // setTimeout(output, 3000);
  // console.log("output: ", output);    
  // setTimeout(() => {
  //   output
  //   }, 500);


}

const myPizza = new Pizza(); // mock db
  
function handleFormSubmission(e){

  myPizza.details(e);

  console.log("myPizza: ", myPizza);

  e.preventDefault();
}

// Create a prototype method for the cost of a pizza depending

window.addEventListener("load", function(){ 
  document.querySelector("form").addEventListener("submit", handleFormSubmission);  
});