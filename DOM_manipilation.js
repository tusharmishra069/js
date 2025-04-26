// DOM Manipulation

//  DOM Kya Hota Hai?
// DOM (Document Object Model): Webpage ka structure ko JavaScript se control karne ka tarika.

// Matlab HTML elements ko select, change, style, create, aur delete kar sakte ho.


// 1 Select Elements

let heading = document.getElementById("main-heading");
let button = document.getElementById("change-btn");
let resetButton = document.getElementById("reset-btn");

button.addEventListener("click", function() {
  heading.textContent = "You clicked the button!";
  heading.style.color = "red";
  heading.style.backgroundColor = "lightyellow";
});

resetButton.addEventListener("click", function() {
  heading.textContent = "Old  heading";
  heading.style.color = "black";
  heading.style.backgroundColor = "white";
});

// ==========================

// DOM ko Access karna (Element Selection)
//  HTML ke kisi bhi element ko JavaScript se "pakadna".

// Methods:

// getElementById("id")

// getElementsByClassName("class")

// getElementsByTagName("tag")

// querySelector("selector")

// querySelectorAll("selector")

// ===========================

// 2. Change Elements

// DOM Elements ka Content aur Style change karna
// Kisi heading ka text badal dena ya button ka color change karna.

// Examples:

// element.textContent = "New text"

// element.innerHTML = "<b>Bold text</b>"

// element.style.color = "red"

// element.style.fontSize = "30px"


// ==============

// DOM Events ko Handle karna
// Jab user kuch kare (click, hover, etc.), to hum kuch action karein.

// Examples:

// click → Button dabane pe kuch karna

// mouseover → Mouse le jaane pe color badalna

// keydown → Keyboard dabane pe kuch karn


// ======================

// DOM me naye Elements create aur remove karna
//  JavaScript se naye HTML tags create karna ya delete karna.

// Create: document.createElement("tagName")

// Add: parent.appendChild(childElement)

// Remove: element.remove()