//2. Using DOM manipulation, write a function that takes two numbers and prints their sum on the DOM using h1 element, Eg; The answer for adding a and b is 10.
 
function findSum(a, b) {
    const sum = a + b;
    //Access the DOM
    const result = document.getElementById("result"); //fetch element with id(result) where h1 will be added.

    const sumOfNumber = document.createElement("h1"); //creates h1 element in Js
    sumOfNumber.innerText= `The answer of adding ${a} and ${b} is ${sum}.`; // adds the sum to the h1 element
    result.appendChild(sumOfNumber); // adds h1 element as a child of the div

}
findSum(5, 5);











