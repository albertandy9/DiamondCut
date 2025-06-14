// function register
function showRegisterForm() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registerForm').style.display = 'block';
}

// function login
function showLoginForm() {
    document.getElementById('registerForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
}

// function login
function validateForm_login(event){
    event.preventDefault();
    var username = document.getElementById("usernameId_login").value;
    var password = document.getElementById("passwordId_login").value;
    var errorMessage = document.getElementById("errorMessage_login");
    var termsService = document.getElementById("termsService_login").checked;
    errorMessage.innerText ='';
    if(username.length < 3){
        errorMessage.innerText = "Username must be at least 3 characters long";
        return;
    }
    if(password.length < 8){
        errorMessage.innerText = "Password must be at least 8 characters";
        return;
    }   
    if (!termsService) {
        errorMessage.innerText = "You must agree to the terms and services";
        return;
    }
    alert("Congratulations, you have successfully login.")
    window.location.href = 'home.html';
}

// function register
function validateForm_register(event){
    event.preventDefault();  
    var email = document.getElementById("emailId").value;
    var phone = document.getElementById("phoneId").value;
    var username = document.getElementById("usernameId_regis").value;
    var password = document.getElementById("passwordId_regis").value;
    var confirmPassword = document.getElementById("confirmPasswordId").value;
    var termsService = document.getElementById("termsService_register").checked;
    var errorMessage = document.getElementById("errorMessage_regis");
    errorMessage.innerText = '';
    if(!email.includes('@')){
        errorMessage.innerText = "Email must contain @";
        return;
    }
    if(phone.length < 7 || phone.length > 10){
        errorMessage.innerText = "Phone number must be between 7 and 10 digits";
        return;
    }
    if(username.length < 3){
        errorMessage.innerText = "Username must be at least 3 characters long";
        return;
    }
    if(password.length < 8){
        errorMessage.innerText = "Password must be at last 8 characters";
        return;
    }
    if (password !== confirmPassword) {
        errorMessage.innerText = "Passwords do not match";
        return;
    }
    if (!termsService) {
        errorMessage.innerText = "You must agree to the terms and services";
        return;
    }
    alert("Congratulations, you have successfully registered.");
    showLoginForm();
}

// hamburger menu at 768 px
const hamburgerMenu = document.querySelector(".hamburger-menu");
const navLinks = document.querySelector(".navbar");

hamburgerMenu.addEventListener("click", () => {
    hamburgerMenu.classList.toggle("active");
    navLinks.classList.toggle("active");
});