let p1 = prompt("Type your name: ");
let p2 = prompt("Type your POWER: ");
let p3 = prompt("Type a villon name: ");
let p4 = prompt("Type a place: ");
let msg = document.querySelector("#msg");

msg.innerHTML = `Whats up ${p1} your power is ${p2} and you are going to fight with the ${p3} in ${p4}`;
