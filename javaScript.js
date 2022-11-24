let submitButton = document.getElementById('btn');
submitButton.addEventListener("click", formValidation);    // Using "addEventListener" that means when user click on button then this "formValidation" function will execute


 // function declearation
function formValidation(){
    let userName = document.getElementById('userName').value;
    let userEmail = document.getElementById('user_email').value;
    let phoneNo = document.getElementById('phoneNo').value;

// Using Regular Expression
    let userName_validation = /^[A-Za-z ]{3,50}$/ ;
    let userEmail_validation = /^[A-Za-z]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/ ;
    let phoneNo_validation = /^[1-9][0-9]{9}$/ ;

// condition implementation    
    if (userName_validation.test(userName)) {
        document.getElementById('errorName').innerHTML = " ";

    }else{
        document.getElementById('errorName').innerHTML = "*Username is Invalid*" ;
        return false;
    }
    if (userEmail_validation.test(userEmail)) {
        document.getElementById('errorEmail').innerHTML = " ";

    }else{
        document.getElementById('errorEmail').innerHTML = "*Email is Invalid*" ;
        return false;
    }
    if (phoneNo_validation.test(phoneNo)) {
        document.getElementById('errorPhNo').innerHTML = " ";

    }else{
        document.getElementById('errorPhNo').innerHTML = "*Phone number is Invalid*" ;
        return false;
    }
}
 

