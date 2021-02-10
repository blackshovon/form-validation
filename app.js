function validate(){
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const cPassword = document.getElementById('cPassword').value;

    checkUsername(username)
    checkEmail(email)
    checkPassword(password)
    checkPasswordMatch(password , cPassword)
}

function checkUsername(username){
    if (username.length > 7) {
        document.getElementById("username").classList.add("success")
        document.getElementById("username").classList.replace("error" ,"success")
        document.getElementById("usernameError").innerText = ""
    } else {
        document.getElementById("username").classList.add("error")
        document.getElementById("usernameError").innerText = "Username should be 8 letters long"
    }
}

function checkEmail(email){
    if (email.length > 8 && email.includes("@gmail.com")) {
        document.getElementById("email").classList.add("success")
        document.getElementById("email").classList.replace("error" ,"success")
        document.getElementById("emailError").innerText = ""
    } else {
        document.getElementById("email").classList.add("error")
        document.getElementById("emailError").innerText = "You should put a valid gmail"
    }
}

function checkPassword(password){
    if (password.length > 7 && password.includes(".")) {
        document.getElementById("password").classList.add("success")
        document.getElementById("password").classList.replace("error" ,"success")
        document.getElementById("passwordError").innerText = ""
    } else {
        document.getElementById("password").classList.add("error")
        document.getElementById("passwordError").innerText = "password must be 8 letters long and should include . operator"
    }
}

function checkPasswordMatch(password , cPassword){
    if(password == cPassword && password != ""){
        document.getElementById("cPassword").classList.add("success")
        document.getElementById("cPassword").classList.replace("error" ,"success")
        document.getElementById("cPasswordError").innerText = ""
    }
    else {
        document.getElementById("cPassword").classList.add("error")
        document.getElementById("cPasswordError").innerText = "Password Didn't Match"
    }
}



