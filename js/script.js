document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario de forma tradicional
    window.location.href = 'menu.html'; // Redirigir a menu.html
});
