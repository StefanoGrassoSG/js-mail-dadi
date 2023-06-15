//ARRAY

const form = document.getElementById('form');


const mailList = [
    'bacco@gmail.com',
    'vino@gmail.com',
    'sandro@gmail.com',
    'gianluca@gmail.com',
    'pietro@gmail.com'
]

for (let j = 0; j < mailList.length; j++) {
    console.log(j, mailList[j]);
    

}

form.addEventListener('submit', function(evt){
    evt.preventDefault();
    let input = document.getElementById("email").value;
    console.log(input)
})