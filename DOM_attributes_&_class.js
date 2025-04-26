let link = document.getElementById("my-link");
let changeLinkBtn = document.getElementById("change-link");
let toggleClassBtn = document.getElementById("toggle-class");

// Change href attribute
changeLinkBtn.addEventListener("click", function() {
    link.setAttribute("href", "https://youtube.com");
    link.textContent = "Visit Youtube"; // text bhi change kar diya
});

// Toggle class on button click
toggleClassBtn.addEventListener("click", function() {
    link.classList.toggle("highlight"); // Agar highlight lagi hai to hata dega, warna laga dega
});
