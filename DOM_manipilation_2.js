let createBtn = document.getElementById("create-btn");
let removeBtn = document.getElementById("remove-btn");
let container = document.getElementById("container");
let newPara; // hum isko global bana rahe hain taki dono button access kar sakein

// Create button click par naya paragraph banana
createBtn.addEventListener("click", function() {
    newPara = document.createElement("p"); // <p> tag banaya
    newPara.textContent = "A new paragraph that is created after u clicked the button"; // Uska text set kiya
    container.appendChild(newPara); // Usko container ke andar daal diya
});

// Remove button click par paragraph ko hataana
removeBtn.addEventListener("click", function() {
    if(newPara) {
        newPara.remove(); // paragraph ko hata diya
        newPara = null; // variable reset
    }
});
