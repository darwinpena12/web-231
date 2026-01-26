/*    JavaScript 7th Edition
      Chapter 2
      Project 02-02

      Application to test for completed form
      Author: Darwin Pena Cabrera
      Date: 01/25/2026  

      Filename: project02-02.js
 */
 
//Verify if all the values were declared
function verifyForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;

  name && email && phone ?
  window.alert("Thank you!"):
  window.alert("Please fill in all fields");
}

//run the verifyForm when click on Submit button
document.getElementById("submit").addEventListener("click", verifyForm);