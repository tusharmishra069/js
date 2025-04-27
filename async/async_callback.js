// Async JavaScript kya hota hai?
// Normal JavaScript synchronously chalta hai — line by line.
// Lekin kuch kaam (jaise server se data lana, file read karna) mein time lagta hai.
// Agar hum wait karte rehte, pura program ruk jata.

// Async JavaScript allow karta hai ki aise time-consuming kaam background me chale, aur baaki ka code continue kare.

// Concept    |          Explanation |
// ------------------------------------------
// Callback   | Function jo dusre function ke andar call hota hai after task completion. | 
// Promises   | Better way to handle async work — success ya fail hone par kuch action karte hain. | 
// async/await| Modern style — promises ko aur simple banata hai likhne me. | 
// Fetch API  | Real world me server se data lene ka tarika. | 


//callback function


// //normal function
// function great(name, callback) {
//     console.log("Hello " + name);
//     callback();
// }

// //callback function
// function sayGoodbye() {
//     console.log("Goodbye!");
// }

// //call

// great("Tushar", sayGoodbye); // 


//example 1

// function add(a, b, callback){
//     let sum = a + b;
//     callback(sum);
// }

// function display(sum){
//     console.log("The sum is: " + sum);
// }

// add(2, 5, display); 


//example 2

function print(message, callback){
    console.log(message);
    setTimeout(callback, 2000); // 2 second wait
}

function displayMessage(){
    console.log("This is a callback message after 2 seconds.");
}

print("Hello, Tushar!", displayMessage); // 2 second wait ke baad displayMessage call hoga