/*
- Allow the user to choose toppings and size for the pizza they'd like to order.
- Create a pizza object constructor with properties for toppings and size.
- Create a prototype method for the cost of a pizza depending on the selections chosen. Use your own formula for this.
*/

function Pizza(size){
  this.toppings = [];
  this.size = size;
} 

// Pizza.prototype.cost = () => {

// }

Pizza.prototype.details = (e) => {
  e.preventDefault();
  const form = document.querySelector("form");
  const log = document.querySelector("#log");

  const data = new FormData(form);
  let output = "";
  for (const entry of data) { // 
    //     // FIGURE OUT HOW TO CATCH EA ENTRY LOOP TO MULT
    // if(entry[0] === "toppings"){
    //   for( let entry of data){

    //     output = `Size: ${output} ${entry[0]} = ${entry[1]}`
    //   // 
    //     // entry[1] = this.toppings;
    //     // console.log("entry toppings?", entry[1]);
    //   }
    // } else if(entry[0] === "size"){
    //   output = `Size: ${output} ${entry[0]} = ${entry[1]}\n`; 
    //   // data.forEach(function (value, i) {
    //   //     console.log('VERA %d: %s', i, value);
    //   // });
    // }
    output = `${output} ${entry[0]} = ${entry[1]}\n`;

    // console.log("Output: ", output);  
    // console.log("Entry: ", entry); 
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