// arrays

// let fruits = ['apple', 'banana', 'cherry'];
// console.log(fruits); 

// ======================


//  Common Array Methods

// Method	       Kya karta hai

// push()	       End me add karta hai
// pop()	       End se remove karta hai
// shift()	       Start se remove karta hai
// unshift()	   Start me add karta hai
// map()	       Array ke har element pe kaam karta hai aur naya array banata hai
// filter()	   Condition ke basis pe new array banata hai
// reduce()	   Sare elements ko single value me reduce karta hai


// =======================


// let numbers = [1, 2, 3, 4, 5];

// // push
// numbers.push(6);
// console.log(numbers); // [1, 2, 3, 4, 5, 6]

// // pop
// numbers.pop();
// console.log(numbers); // [1, 2, 3, 4, 5]

// // map
// let doubled = numbers.map(num => num * 2);
// console.log(doubled); // [2, 4, 6, 8, 10]

// // filter
// let even = numbers.filter(num => num % 2 === 0);
// console.log(even); // [2, 4]

// // reduce
// let sum = numbers.reduce((acc, curr) => acc + curr, 0);
// console.log(sum); // 15


// =======================


// Object Basics
// Object = Key-Value pairs ka collection.

// let student = {
//     name: "Tushar",
//     age: 21,
//     city: "Delhi"
//   };
  
//   console.log(student);


//   // Accessing object properties

// console.log(student.name);  
// console.log(student.city); 
// console.log(student.age);


// ========================


// Destructuring
// Object ya array ke andar se directly value nikalna.

//array destructuring

// let fruits = ["Apple", "Banana", "Mango"];
// let [a, b, c] = fruits;
// console.log(a, b, c);

// ===================

// object destructuring

// let student = {
//     name: "Tushar",
//     age: 21,
//     city: "Delhi"
//   };
//   let { name, age, city } = student;
//   console.log(name, age, city);