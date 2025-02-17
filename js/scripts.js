document.addEventListener("DOMContentLoaded", function() {
    // Verifica si el usuario está autenticado
    if (!isAuthenticated()) {
        showContent('login');
    } else {
        showContent('add-day');
    }
});

function showContent(id) {
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById(id).classList.add('active');
}

// Simulación de login
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Aquí va la lógica de autenticación
    if (username === 'admin' && password === 'admin') {
        localStorage.setItem('authenticated', 'true');
        window.location.href = 'admin.html';
    } else if (username !== '' && password !== '') {
        localStorage.setItem('authenticated', 'true');
        showContent('add-day');
    } else {
        alert('Usuario o contraseña incorrectos.');
    }
});

function isAuthenticated() {
    return localStorage.getItem('authenticated') === 'true';
}
