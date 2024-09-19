// console.log('hello from js')

document.getElementById('btn-login').addEventListener('click', function(event){
    event.preventDefault();
    // console.log('login button clicked');


    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;


    // console.log(phoneNumber, pinNumber);
    
    // this is temporary bad way
    if(phoneNumber === '5' && pinNumber === '1234'){
        console.log(' Your are logged in')

        window.location.href= './home.html'
    }
    else{
        alert ('wrong phone or pin')
    }


})