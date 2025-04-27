// function outerFunction() {
//     let outerVar = "I am from outer function";
  
//     function innerFunction() {
//       console.log(outerVar);  // innerFunction ko outerVar mil raha hai
//     }
  
//     return innerFunction;
//   }
  
//   let closureFunc = outerFunction(); // outerFunction execute hoti hai, innerFunction return hota hai
//   closureFunc(); // Output: "I am from outer function"
  


// example

function counter() {
    let count = 0;
  
    return function() {
      count++;
      console.log(count); // count ko update karta rehta hai
    }
  }
  
  let countUp = counter();  // countUp function ke andar closure ho gaya
  countUp(); // Output: 1
  countUp(); // Output: 2
  countUp(); // Output: 3


//   =============================

// Why Closures are Useful?
// Data Encapsulation:

// Function ke andar variables ko encapsulate karke hum unhe directly modify nahi kar sakte, jo security provide karta hai.

// Private Variables:

// Functions ke andar jo variables hote hain, woh private hote hain. Closure ke through unhe safely access kar sakte hain.

// Event Handlers and Callbacks:

// Closures ka use event listeners mein hota hai, jaha functions apne enclosing function ke variables ko use karte hain.

