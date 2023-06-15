//NUMBER GENERATOR


const button = document.getElementById('throw');

let result = document.querySelector('h1');

button.addEventListener('click', function(){

    const newNumber = document.getElementById('clear');
    newNumber.innerHTML = '';
    const newNumberSecond = document.getElementById('secondclear');
    newNumberSecond.innerHTML = '';

    const number = Math.floor(Math.random() * 6) + 1;

    const anotherNumber = Math.floor(Math.random() * 6) + 1;

    document.querySelector('.red').append(number);
   
    document.querySelector('.yellow').append(anotherNumber);

    if (number > anotherNumber) {
        document.querySelector("h1").innerHTML = "ROSSO hai vinto!";
    }

    else if (number == anotherNumber) {
        document.querySelector("h1").innerHTML = "PAREGGIO";
    }

    else {
        document.querySelector("h1").innerHTML = "GIALLO hai vinto!";
    }

})
