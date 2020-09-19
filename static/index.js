/**
 * Add a hello world right at the top to make sure the Javascript is loaded
 */
console.log("Hello world");

/**
 * Success is called when the answer is returned from the server. This
 * updates the answer text to the answer returned by the server
 */
function success(data) {
    console.log("success=" + data);
    $("#answer").text("Answer=" + data);
}

/**
 * Given the op and the numbers, send the operands to the server and
 * set up the success function to receive the answer once the server has
 * calculated it.
 */
function send(op, num1, num2=0) {
    let url = "/calculate/op/" + op + "/num1/" + num1 + "/num2/" + num2;
    console.log(url);
    $.get(url, success);
}

/**
 * Handle the user clicking on the Not button
 */
function doNot() {
    // send a NOT command to the server with the first number
    let num1 = $("#num1").val();
    
    // If the inputs are not 0s or 1s, alert the user
    // and stop calculation
    for (let i = 0; i < num1.length; i++) {
      if (num1.charAt(i) != '0' && num1.charAt(i) != '1') {
        alert("The user must enter 0s or 1s");
        return;
      }
    }
    
    //If the user does not have 1 input, alert the user 
    // and stop calculation
    if (num1.length === 0) {
      alert("The user does not have an input");
    }
    
    // If the inputs are not 0s or 1s, alert the user
    // and stop calculation
    for (let i = 0; i < num1.length; i++) {
      if (num1.charAt(i) != '0' && num1.charAt(i) != '1') {
        alert("The user must enter 0s or 1s");
        return;
      }
    }
    
    // If there is no input, stop calculation
    if (num1 == " ") {
      return;
    }
    
    send("NOT", num1);
}

/**
 * Handle the user clicking the OR button
 */
function doOr() {
    // probably should get two numbers and do Or
    let num1 = $("#num1").val();
    let num2 = $("#num2").val();
    
    // If the inputs are not 0s or 1s, alert the user
    // and stop calculation
    for (let i = 0; i < num1.length; i++) {
      if (num1.charAt(i) != '0' && num1.charAt(i) != '1') {
        alert("The user must enter 0s or 1s");
        return;
      }
    }
    
    for (let i = 0; i < num2.length; i++) {
      if (num2.charAt(i) != '0' && num2.charAt(i) != '1') {
        alert("The user must enter 0s or 1s");
        return;
      }
    }
    
    // If the user does not have 2 inputs, alert the user 
    // and stop calculation
    if (num1.length === 0 || num2.length === 0) {
      alert("The user does not have 2 inputs");
      return;
    }
    
    // If the inputs are not the same length, alert the user
    // and stop calculation
    if (num1.length != num2.length) {
      alert("The inputs must be the same length");
      return;
    }
    
    // If there is no input, stop calculation
    if (num1.length == " " || num2.legnth == " ") {
      return;
    }
    
    send("OR", num1, num2);
}

/**
 * Handle the user clicking the AND button
 */
function doAnd() {
    // probably should get two numbers and do And
    let num1 = $("#num1").val();
    let num2 = $("#num2").val();
    
    // If the inputs are not 0s or 1s, alert the user
    // and stop calculation
    for (let i = 0; i < num1.length; i++) {
      if (num1.charAt(i) != '0' && num1.charAt(i) != '1') {
        alert("The user must enter 0s or 1s");
        return;
      }
    }
    
    for (let i = 0; i < num2.length; i++) {
      if (num2.charAt(i) != '0' && num2.charAt(i) != '1') {
        alert("The user must enter 0s or 1s");
        return;
      }
    }
    
    // If the user does not have 2 inputs, alert the user 
    // and stop calculation
    if (num1.length === 0 || num2.length === 0) {
     alert("The user does not have 2 inputs");
      return;
    }
    
    // If the inputs are not the same length, alert the user
    // and stop calculation
    if (num1.length != num2.length) {
      alert("The inputs must be the same length");
      return;
    }
    
    // If there is no input, stop calculation
    if (num1.length == " " || num2.length == " ") {
      return;
    }
    
    send("AND", num1, num2);
}

/**
 * This function is called on document ready to set up the handlers
 * that are called when each button is clicked
 */
function setup() {
    $("#not").click(doNot);
    $("#or").click(doOr);
    $("#and").click(doAnd);
}

/**
 * When the document has fully loaded and is ready, call the setup function
 */
$(document).ready(setup);