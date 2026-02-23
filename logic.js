function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let message = document.getElementById("message");

    if (username === "" || password === "") {
        message.style.color = "red";
        message.innerHTML = "Please fill all fields";
    }
    else if (username === "admin" && password === "1234") {
        message.style.color = "green";
        message.innerHTML = "Login Successful";
    }
    else {
        message.style.color = "red";
        message.innerHTML = "Invalid Username or Password";
    }
}
