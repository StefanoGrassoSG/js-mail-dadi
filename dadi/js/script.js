//NUMBER GENERATOR

const number = Math.floor(Math.random() * 6) + 1;

const anotherNumber = Math.floor(Math.random() * 6) + 1;

document.querySelector('.red').append(number);
document.querySelector('.yellow').append(anotherNumber);

if (number > anotherNumber) {
    console.log("ROSSO hai vinto");
}

else if (number == anotherNumber) {
    console.log("PARI")
}

else {
    console.log("YELLOW hai vinto")
}