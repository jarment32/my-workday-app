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

    // Obtener usuarios almacenados en localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Buscar el usuario en la lista de usuarios
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        localStorage.setItem('authenticated', 'true');
        localStorage.setItem('role', user.role);
        if (user.role === 'admin') {
            window.location.href = 'admin.html';
        } else {
            showContent('add-day');
        }
    } else {
        alert('Usuario o contraseña incorrectos.');
    }
});

function isAuthenticated() {
    return localStorage.getItem('authenticated') === 'true';
}
