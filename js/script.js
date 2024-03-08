document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById('form-container');
    form.addEventListener("submit", function (event) {

        // all validation variables
        var emailInput = document.getElementById('email');
        var emailValidate = emailValidation(emailInput.value);

        var phoneNumberInput = document.getElementById('pnum');
        var phoneNumberValidate = phoneNumberValidation(phoneNumberInput.value)

        var postCodeInput = document.getElementById('pc');
        var postCodeValidate = postCodeValidation(postCodeInput.value);

        // if the return value from any validation function an error message is shown
        if (!emailValidate) {
            event.preventDefault();
            alert("Invalid email format! Please enter a valid address");
        } else if (!phoneNumberValidate) {
            event.preventDefault();
            alert("Invalid phone number, enter a valid UK phone number!");
        } else if (!postCodeValidate) {
            event.preventDefault();
            alert("Invalid postcode! Please enter valid NI postCode");
        } else{
            event.preventDefault();
            alert("Message Sent!");
            //will reset the feilds if message is sent 
            form.reset();
        }
    })
});


function emailValidation(email) {
    // this regular expressions tests to ensure an @ symbol is used and a . following at some point 
    var regex = /^.+@.+\..+$/;
    // will return a boolean value
    return regex.test(email);
}

function phoneNumberValidation(phoneNumber) {
    // this regular expression tests to ensure that +44 is included and is 10 numbers
    var regex = /^\+44\s?\d{10}$/;
    return regex.test(phoneNumber);
}

function postCodeValidation(postcode) {
    // this regular expression tests to ensure BT at the start with digits after 
    var regex = /^BT\d+\s?\w+$/;
    return regex.test(postcode);
}


document.addEventListener("DOMContentLoaded", function() {
    var searching = document.querySelector('.search');
    searching.addEventListener("submit", function (event){
        event.preventDefault();
        alert("No results found!"); 
    })
});


