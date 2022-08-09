// Random Pin Number

function getPin(){
    const randomNumber = Math.round(Math.random()*10000);
    const pin = randomNumber + '';
    if(pin.length == 4){
        return randomNumber;
    }else{
        return getPin()
    }
}
function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}

// BackSpace Function

function back() {
    const number = document.getElementById("typed-numbers").value;
    document.getElementById("typed-numbers").value = number.substr(0, number.length - 1);
}
// All Clear Function
function deleteText() {
    document.getElementById("typed-numbers").value='';
   }
// Input Pin
function inputPin(number) {
    document.getElementById("typed-numbers").value += number;
}

// Verify Pin
function verifyPin() {
    const pin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-numbers').value;
    const successMessage = document.getElementById('notify-success');
    const failError = document.getElementById('notify-fail');
    if (pin == typedNumbers) {
        successMessage.style.display = 'block';
        failError.style.display = 'none';
    }
    else{
        successMessage.style.display = 'none';
        failError.style.display = 'block';
    }
}