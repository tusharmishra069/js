fetch(url)
    .then(response => response.json())  // server ka response ko JSON me badla
    .then(data => console.log(data))     // ab use kar sakte hain
    .catch(error => console.log('Error:', error));  // agar kuch galat hua



// 1	fetch('url') — Server ko request bhejna
// 2	response.json() — Response ko readable JSON me badalna
// 3	then(data => {}) — Data mil gaya, ab kaam karo
// 4	catch(error => {}) — Agar kuch galat hua toh error pakdo