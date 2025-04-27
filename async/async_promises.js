// Promise ka Flow
// resolve() → Jab kaam sahi ho jaye

// reject() → Jab kaam fail ho jaye

// then() → Jab resolve hota hai

// catch() → Jab reject hota hai

// ===========================


// let myPromise = new Promise(function(resolve, reject) {
//     let success = false; 
//     if(success){
//         resolve("Kaam ho gaya!");
//     } else {
//         reject("Kaam fail hogaya!");
//     }
// });

// myPromise
//     .then(function(result){
//         console.log(result); // Jab resolve hoga
//     })
//     .catch(function(error){
//         console.log(error); // Jab reject hoga
//     });

// ======================

// let wait = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve("2 second baad kaam ho gaya!");
//     }, 2000); // 2 second wait
// });

// wait.then((message) => {
//     console.log(message); // Output: "2 second baad kaam ho gaya!"
// })
//     .catch(error => {
//     console.log(error); // Agar koi error hota hai
// });



// =========================

function fetchData(){
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            let success = true; // Simulate success or failure
            if(success){
                resolve("Data fetched successfully!");
            } else {
                reject("Failed to fetch data.");
            }
        }, 3000); // 3 second wait
    });
}

fetchData()
    .then((message) => {
        console.log(message); // Output: "Data fetched successfully!"
    })
    .catch((error) => {
        console.log(error); // Agar koi error hota hai
    }); 

