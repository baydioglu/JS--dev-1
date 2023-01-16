let userName;
userName = prompt("Please enter your name.");

document.querySelector("#myName").innerHTML += `${userName}`;

let today = new Date();
let hourNow = today.getHours();
let minutesNow = today.getMinutes();
let secondsNow = today.getSeconds();

document.querySelector("#myClock").innerHTML += `${hourNow}:${minutesNow}:${secondsNow}`;
