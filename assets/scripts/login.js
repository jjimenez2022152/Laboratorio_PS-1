var loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    
    if (username === "usuario" && password === "contraseña") {
        
        window.location.href = "contactos.html";
    } else {
        alert("Usuario o contraseña incorrectos.");
    }
});
