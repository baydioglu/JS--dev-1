let userName;
userName = prompt("Please enter your name.");

document.querySelector("#myName").innerHTML += `${userName}`;

let today = new Date();
let dateNow = today.getDate();
let monthNow = today.getMonth();
let yearNow = today.getFullYear();
let hourNow = today.getHours();
let minutesNow = today.getMinutes();
let secondsNow = today.getSeconds();

document.querySelector("#myClock").innerHTML += `${hourNow}:${minutesNow}:${secondsNow}`;

document.querySelector("#myDate").innerHTML += `${dateNow}/${monthNow}/${yearNow}`;