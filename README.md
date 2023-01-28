# Pizza Parlor

#### By Vera Weikel

#### A Pizzeria Storefront App

## Technologies Used

* HTML 
* CSS 
* Javascript

## Description
Create a website for a pizza company where a user can choose one or more individual toppings (mushroom, artichoke, anchovy), a size to order a pizza (s, m, l), and see the final cost. Here is the [repo](https://github.com/QuietEvolver/pizza-parlor-23.git)

### Objectives 
* Allow the user to choose toppings and size for the pizza they'd like to order.
* Create a pizza object constructor with properties for toppings and size.
* Create a prototype method for the cost of a pizza depending on the selections chosen. Use your own formula for this.

## Tests

<!-- first function -->
Describe: Pizza()

Test: "It should return a Pizza object with two properties for toppings and size"
Code: 
const myPizza = new Pizza();
mypizza.toppings = ["anchovies", "pineapple"];
mypizza.size = "medium";
Expected Output: Pizza { toppings: ["anchovies", "pineapple"], size: "medium", price: 0}

<!-- new function -->

Describe: Pizza.prototype.cost

Test: "It should return a Pizza order toppings at $3 ea selection(s)."
Code: 
const myPizza = new Pizza();
myPizza.toppings = ["anchovies", "pineapple"];
myPizza.size = "medium";
myPizza.price = 6
Expected Output: Pizza {toppings: Array(2), size: 'medium', price: 6}

<!-- new function 

Describe: Pizza.prototype.details

Test: "It should return toppings and size form selection(s)."
Code: const myPizza = new Pizza();
myPizza.toppings = ["anchovies", "pineapple"];
myPizza.size = "medium";
Expected Output: Pizza { toppings: ["pinneapple"], size: "medium" }

Test: "It should return a Pizza order toppings and size form selection(s)."
Code: const myPizza = new Pizza();
myPizza.toppings = ["anchovies", "pineapple"];
myPizza.size = "medium";
Expected Output: Pizza { toppings: ["pinneapple"], size: "medium" } -->

## Setup/Installation Requirements

* Clone this repo to your workspace.
* Navigate to the top level of the directory.
* Open index.html in your browser.

## Known Bugs

* No known bugs.

## License

[MIT](https://choosealicense.com/licenses/mit/)

Copyright (c) 2023 Vera Weikel

MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.