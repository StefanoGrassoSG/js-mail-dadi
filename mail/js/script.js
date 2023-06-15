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

    for(let i=0; i<mailList.length; i++) {

        if (input == mailList[i]) {
            alert ("hai effettuato l'accesso")
            break;
        }

        else {
            alert ("questa email non ha accesso")
            break;
        }
    }

     
        
})

    





