// let person = {
//     greet: function() {
//       console.log("Hello!");
//     }
//   };
  
//   let student = {
//     name: "Tushar"
//   };
  
//   // Inherit person properties into student
//   student.__proto__ = person;
  
//   console.log(student.name); // Output: Tushar
//   student.greet();           // Output: Hello!  (greet student mein nahi tha, prototype se aaya)
  


// Prototype Inheritance Chain Example

// GrandParent object banaya
let grandParent = {
    sayGrandParent: function() {
      console.log("I am GrandParent");
    }
  };
  
// Parent object banaya
let parent = {
    sayParent: function() {
      console.log("I am Parent");
    }
  };
  
// Child object banaya
let child = {
    sayChild: function() {
      console.log("I am Child");
    }
  };
  
// Parent ka prototype GrandParent set kiya
parent.__proto__ = grandParent;

// Child ka prototype Parent set kiya
child.__proto__ = parent;
  
  child.sayChild();        
  child.sayParent();       
  child.sayGrandParent();  
  

