
// console.log('add mabby')

document.getElementById('btn-addmoney')
    .addEventListener('click', function(event){
        event.preventDefault();
        // console.log('add money button clicked')

    const inputAmount= document.getElementById('input-amount').value;
    const inputPin = document.getElementById('input-pin').value;

    console.log(inputAmount, inputPin);

})