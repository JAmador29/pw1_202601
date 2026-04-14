document.getElementById('registroForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Formato básico de email
    const regexNombre = /^[a-zA-ZÀ-ÿ\s]{3,40}$/;    // Solo letras y espacios

    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const pass = document.getElementById('password').value;

    let esValido = true;

    if (!regexNombre.test(nombre)) {
        document.getElementById('errorNombre').innerText = "Nombre inválido (3-40 letras).";
        esValido = false;
    } else {
        document.getElementById('errorNombre').innerText = "";
    }


    if (!regexEmail.test(email)) {
        document.getElementById('errorEmail').innerText = "Por favor, ingresa un correo real.";
        esValido = false;
    } else {
        document.getElementById('errorEmail').innerText = "";
    }

    if (pass.length < 8) {
        document.getElementById('errorPass').innerText = "La contraseña debe ser más larga.";
        esValido = false;
    } else {
        document.getElementById('errorPass').innerText = "";
    }

    if (esValido) {
        alert("¡Formulario validado correctamente! Enviando datos...");
        
    }
});