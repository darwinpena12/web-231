/*    JavaScript 7th Edition
      Chapter 2
      Project 02-04

      Application to calculate the cost of a restaurant order plus tax
      Author: Darwin Pena Cabrera
      Date: 02/01/2026  

      Filename: project02-04.js
 */
//declare global constants for the application
const CHICKEN_PRICE = 10.95;
const HALIBUT_PRICE = 13.95;
const BURGER_PRICE = 9.95;
const SALMON_PRICE = 18.95;
const SALAD_PRICE = 7.95;
const SALES_TAX = 0.07;

//setup the form when the page loads
window.addEventListener("load", seputcalcTotal)

//Setup form calcTotal()
function seputcalcTotal() {

  let cost = 0;
  document.getElementById("chicken").checked = false;
  document.getElementById("halibut").checked = false;
  document.getElementById("burger").checked = false;
  document.getElementById("salmon").checked = false;
  document.getElementById("salad").checked = false;

  calcTotal();
  
  //Add event handles for each input control
  document.getElementById("chicken").onchange = calcTotal;
  document.getElementById("halibut").onchange = calcTotal;
  document.getElementById("burger").onchange = calcTotal;
  document.getElementById("salmon").onchange = calcTotal;
  document.getElementById("salad").onchange = calcTotal;

}
//Total cost of the order
function calcTotal() {
  let cost = 0;
  let buyChicken = document.getElementById("chicken").checked;
  let buyHalibut = document.getElementById("halibut").checked;
  let buyBurger = document.getElementById("burger").checked;
  let buySalmon = document.getElementById("salmon").checked;
  let buySalad = document.getElementById("salad").checked;

  //Add the cost chicken if the customer buys it
  cost += buyChicken ? CHICKEN_PRICE : 0;

  //Add the cost halibut if the customer buys it
  cost += buyHalibut ? HALIBUT_PRICE : 0;

  //Add the cost burger if the customer buys it
  cost += buyBurger ? BURGER_PRICE : 0;

  //Add the cost salmon if the customer buys it
  cost += buySalmon ? SALMON_PRICE : 0;

  //Add the cost salad if the customer buys it
  cost += buySalad ? SALAD_PRICE : 0;

  //Display the Total Cost of Items
  document.getElementById("foodTotal").innerHTML = formatCurrency(cost);

  //find the tax amount by multiplying the cost by the SALES_tax and display its value
  let tax = cost * SALES_TAX;
  document.getElementById("foodTax").innerHTML = formatCurrency(tax);

  //find the total cost by adding the tax amount plus the cost and display its value

  let totalCost = cost + tax;
  document.getElementById("totalBill").innerHTML = formatCurrency(totalCost);

}
// Function to display a numeric value as a text string in the format $##.## 
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
    
 }
