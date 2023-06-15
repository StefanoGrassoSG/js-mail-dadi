//ARRAY

const form = document.getElementById('form');


const mailList = [
    'bacco@gmail.com',
    'vino@gmail.com',
    'sandro@gmail.com',
    'gianluca@gmail.com',
    'pietro@gmail.com'
]


   
form.addEventListener('submit', function(evt){
    evt.preventDefault();
    let input = document.getElementById("email").value;
    console.log(input)

    if(mailList.indexOf(input) !== -1) {
        alert("Hai effettutato l'accesso")
    }
    
    else {
        alert("Questa email non ha accesso")
    }
        
})

    





