document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    alert("¡Contacto agregado exitosamente!");
    document.getElementById("contactForm").reset(); 
});
