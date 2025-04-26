let btn = document.getElementById("change-heading");
let heading = document.getElementById("main-heading");
let resetBtn = document.getElementById("reset-heading");
let addParagraphBtn = document.getElementById("add-paragraph");
let removeParagraphBtn = document.getElementById("remove-paragraph");
let container = document.getElementById("para-container");

btn.addEventListener("click", function() {
    heading.textContent = "You changed the heading!";
});


resetBtn.addEventListener("click", function() {
    heading.textContent = "Welcome to DOM Manipulation";
});


addParagraphBtn.addEventListener("click", function(){
    let newpara = document.createElement("p"); // <p> tag banaya
    newpara.textContent = "This is a new paragraph added to the container."; // Uska text set kiya
    container.appendChild(newpara); // Usko container ke andar daal diya
})

removeParagraphBtn.addEventListener("click", function(){
    let paragraphs = container.getElementsByTagName("p"); // Container ke andar jitne bhi <p> hain unhe pakad lo
    if(paragraphs.length > 0) {
        paragraphs[paragraphs.length - 1].remove(); // Last paragraph ko hata do
    }
});
