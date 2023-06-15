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
   

    form.addEventListener('submit', function(evt){
        evt.preventDefault();
        let input = document.getElementById("email").value;
        console.log(input)

        if (input == mailList[j]) {
            alert("Hai effettutato l'accesso")
        }
    
        else  {
            alert("Questa email non ha accesso")
        }
        
    })

    

}

