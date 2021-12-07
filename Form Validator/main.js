const form= document.getElementById("form-id");
const username= document.getElementById("name");
const eamil= document.getElementById("email");
const password= document.getElementById("password");
const password2= document.getElementById("password2");

//show input error message
function showError(input, message){ //input is username
    const formControl= input.parentElement; //formControl is div of id name
    formControl.className='form-control error'; //overriding div classname

    const small=formControl.querySelector("small"); //selecting small element from from-control div of name id
    small.textContent=message;
}

//show input success message
function showSuccess(input){
    const formControl= input.parentElement; //formControl is div of id name
    formControl.className='form-control success'; //overriding div classname
}

//check email is valid
function checkEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())){
        showSuccess(input);
    }else {
        showError(input, 'Email is not valid');
    }
}

//check reqquired fields
function checkRequired(inputArr){
    inputArr.forEach(input => {   //here input are input tag of name, email password, password2 ids
        if(input.value.trim()===''){ //trim() trims all whitespaces
            showError(input, `${getFieldName(input)} is required`)
        }
        else{
            showSuccess(input); 
        }
    });
}

//check input length for username and password
function checkLength(input, min, max){
    if(input.value.length< min){
        showError(input, `${getFieldName(input)} must be atleast ${min} characters` )
    }
    else if(input.value.length> max){
        showError(input, `${getFieldName(input)} must be less than ${max} characters`)
    }
    else{
        showSuccess(input);
    }
}

//check passwords match
function checkPasswordsMatch(input1, input2){
    if(input1.value !== input2.value){
        showError(input2, 'Passwords do not match')
    }
}


//get feld name uppercased first letter
function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}




//Event Listeners
form.addEventListener('submit', function(e){
    e.preventDefault();

    checkRequired([username, email, password, password2]);
    checkLength(username, 3,15);
    checkLength(password, 6, 25);
    checkEmail(email);
    checkPasswordsMatch(password, password2);
    // if(username.value===''){
    //     showError(username, "Username is required");
    // }
    // else{
    //     showSuccess(username);
    // }

    // if(email.value===''){
    //     showError(email, "Email is required");
    // }else if(!validateEmail(email.value)){
    //     showError(email, "Email is not valid");
    // }
    // else{
    //     showSuccess(email);
    // }

    // if(password.value===''){
    //     showError(password, "Password is required");
    // }
    // else{
    //     showSuccess(password);
    // }

    // if(password2.value===''){
    //     showError(password2, "Password2 is required");
    // }
    // else{
    //     showSuccess(password2);
    // }
})