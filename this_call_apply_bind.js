// THIS

// this ka matlab hota hai current context (jis object ke andar code chal raha hai).
// Yeh dynamic hota hai — depend karta hai function kis tarike se call hua hai.

// const person = {
//     name: "Tushar",
//     greet: function() {
//       console.log("Hello, " + this.name);
//     }
//   };
  
//   person.greet(); 
  
//CALL

// Ek function ko kisi specific object ke saath direct call karne ke liye use karte hain.


// function greet() {
//     console.log("Hello, " + this.name);
//   }
  
//   const user = {
//     name: "tushar"
//   };
  
//   greet.call(user);

  
// APPLY
// apply() bhi call() jaise hi hai, sirf arguments array ke form mein pass hote hain.


// function greet(message) {
//     console.log(message + ", " + this.name);
//   }
  
//   const user = {
//     name: "tushar"
//   };
  
//   greet.apply(user, ["Good Morning"]);
  

// BIND

// bind() function ko copy karta hai aur usme this permanently fix kar deta hai.
// Fir jab chaaho call kar sakte ho.

// function greet() {
//     console.log("Hello, " + this.name);
//   }
  
//   const user = {
//     name: "tushar"
//   };
  
//   const newGreet = greet.bind(user);
  
//   newGreet();

  