var loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    
    if (username === "jjimenez" && password === "123") {
        
        window.location.href = "./assets/pages/contactos.html";
    } else {
        alert("Usuario o contraseña incorrectos.");
    }
});
