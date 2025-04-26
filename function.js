// . Normal Function Declaration

// function greet(name) {
//     return "Hello, " + name + "!";
// }

// console.log(greet("Tushar"));


// ==================

// Function Expression (Function ko variable me store karte hain)


// const greet = function(name) {
//     console.log("Hello, " + name + "!");
//   };
  
//   greet("tushar");


// ==================

// Arrow Function (ES6 se aaya hai)

// const greet = (name) => {
//     console.log("Hello, " + name + "!");
//   };
  
//   greet("tushar");
  

// more smaller version

// const greet = name => console.log("Hello, " + name + "!");
// greet("tushar");

// ==================

// IIFE (Immediately Invoked Function Expression)
// Function jo turant run ho jaaye bina call kare:

// (function() {
//     console.log("This function runs immediately!");
//   })();
  

// ==================

// Rest Operator in Functions (...)

// function sum(...numbers) {
//     console.log(numbers); // array ban jaata hai
//   }
  
//   sum(1, 2, 3, 4, 5);


// ==================

// spread Operator in Functions (...)
// Array ke elements ko alag alag pass karna:

// let nums = [1, 2, 3];
// function add(a, b, c) {
//   console.log(a + b + c);
// }

// add(...nums); // spread karke 1, 2, 3 pass ho jaayega

// ===================================================

// example 1

// function add(a, b) {
//     return a +b;
// }

// console.log(add(2,3));

// example 2

// const gg = (name) => {
//     return "u r noob " + name + "!";
// }

// console.log(gg("Tushar"));

// example 3 find max num using rest operator

// function findMax(...numbers) {
//     let max = Math.max(...numbers);
//     return max;
// }

// console.log(findMax(1, 2, 3, 4, 5)); // Output: 5