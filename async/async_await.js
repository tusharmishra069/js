// Async/Await kya hota hai?
// Async/Await ka use promises ko handle karne ke liye hota hai.
// Ye ek simple syntax provide karta hai jisse code ko read karna aur likhna asaan ho jata hai.
// async function ko declare karta hai, jo ek promise return karta hai.
// await ka use hum async function ke andar karte hain, jo promise ke resolve hone tak wait karte ha


// async function fetchData() {
//     return "Data fetched successfully!";
// }

// fetchData().then(result => console.log(result)); 


// ===========================

// Async/Await with Promise :- Async/Await ka use hum Promise ko await karne ke liye karte hain. Jab tak Promise resolve nahi hota, hum code ko aage nahi badhate.

// function fetchData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let success = true;
//             if(success){
//                 resolve("Data fetched successfully!");
//             } else {
//                 reject("Data fetch failed!");
//             }
//         }, 3000);
//     });
// }

// async function getData() {
//     try {
//         let result = await fetchData();  // Waits for fetchData to resolve
//         console.log(result);  // "Data fetched successfully!"
//     } catch (error) {
//         console.log(error);  // If error, prints "Data fetch failed!"
//     }
// }

// getData();


// Async/Await ka Use Case :- Async/Await ko use karke hum easily promises ko handle kar sakte hain aur humare code ko synchronous tarike se likh sakte hain, jo padhne mein easy hota hai.

async function getDataFromServer(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let data = { name: "Tushar", age: 21 };
            resolve(data);
        }, 2000);
    });
}

async function displayData() {
    try {
        let data = await getDataFromServer();  // Waits for getDataFromServer to resolve
        console.log("Name: " + data.name + ", Age: " + data.age);  // "Name: Tushar, Age: 25"
    } catch (error) {
        console.log(error);  // If error, prints error message
    }
}

displayData();  // Calls the function to display data after 2 seconds