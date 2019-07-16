function validateForm(){
    let usernameProgress = 0;
    let passwordProgress = 0;
    let currentIndex = 0;

    let usernameField = document.forms["loginForm"]["username"].value;
    let passwordField = document.forms["loginForm"]["password"].value;

    let notEmpty = () => {
        passwordField === "" ? alert("You must enter a password.") : passwordProgress += 50;
        usernameField === "" ? alert("You must enter a username.") : usernameProgress += 50;
    }
    let checkLength = () => {
        usernameField.length < 6 ? alert("You're username length can't be less than 6 characters long.") : usernameProgress += 50;
        passwordField.length < 6 ? alert("You're password can not be less than 6 digits long.") : passwordProgress += 50;
    }

    let checkProgress = () => {
        if (usernameProgress === 0 || passwordProgress === 0 ||
            usernameProgress === 50 || passwordProgress === 50){
            let dataIncorrect = document.querySelectorAll('.password-check');
            dataIncorrect.forEach((input) => {
                input.style.color = "#9F3634";
            })
            let getInputs = document.querySelectorAll('.incorrect-data');
            getInputs.forEach((input) => {
                input.src = "../images/incorrect-sign.png";
            })
        }
        if(usernameProgress == 100){
            currentIndex += 1;
            document.getElementById("username-check").style.color = "#ffffff";
            document.getElementById("leaf-image-1").src = "../images/check-arrow.png";
        }
        if(passwordProgress == 100){
            currentIndex += 1;
            document.getElementById("password-check").style.color = "#ffffff";
            document.getElementById("leaf-image-2").src = "../images/check-arrow.png";
        }
        if(usernameProgress+passwordProgress===200){
            currentIndex += 1;
            document.getElementById("success-check").style.color = "#ffffff";
            document.getElementById("leaf-image-3").src = "../images/check-arrow.png";
        }
        document.getElementById("field-counter").innerText= currentIndex + "/3";
    }

    notEmpty();
    checkLength();
    checkProgress(); 
    return false;
}
