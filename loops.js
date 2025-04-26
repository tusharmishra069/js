
// loops

// for loop

// for (let i = 0; i < 5; i++) {
//     console.log(i); 
//   }


// while loop

// let i = 0;
// while (i < 5) {
//   console.log(i);
//   i++;
// }


// do while loop

// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i < 5);



// for in loop


// let student = {
//     name: "Tushar",
//     age: 22,
//     city: "Delhi"
//   };
  
//   for (let key in student) {
//     console.log(key, student[key]);
//   }


//for of loop

// let fruits = ["Apple", "Banana", "Mango"];

// for (let fruit of fruits) {
//   console.log(fruit);
// }


// example

let students = [
    { name: "Tushar", age: 22 },
    { name: "Rahul", age: 21 },
    { name: "Sneha", age: 23 }
  ];
  
  for (let student of students) {    // student => ek-ek object
    console.log("Student Details:");
    
    for (let key in student) {       // key => object ke andar ke property names
      console.log(key + ":", student[key]);
    }
  
    console.log("----------------"); // thoda alag dikhe
  }