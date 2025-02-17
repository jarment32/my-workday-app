document.addEventListener("DOMContentLoaded", function() {
    // Verifica si el usuario está autenticado
    if (!isAuthenticated()) {
        showContent('login');
    } else {
        showContent('add-day');
        loadHistory();
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
        localStorage.setItem('username', username);
        localStorage.setItem('role', user.role);
        if (user.role === 'admin') {
            window.location.href = 'admin.html';
        } else {
            showContent('add-day');
            loadHistory();
        }
    } else {
        alert('Usuario o contraseña incorrectos.');
    }
});

document.getElementById('addDayForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const day = document.getElementById('day').value;
    const option1 = document.getElementById('option1').value;
    const option2 = document.getElementById('option2').value;
    const username = localStorage.getItem('username');

    // Obtener registros almacenados en localStorage
    const records = JSON.parse(localStorage.getItem('records')) || [];

    // Añadir el nuevo registro a la lista
    records.push({ user: username, day: day, option1: option1, option2: option2 });

    // Guardar la lista de registros en localStorage
    localStorage.setItem('records', JSON.stringify(records));

    loadHistory();
});

function loadHistory() {
    const records = JSON.parse(localStorage.getItem('records')) || [];
    const username = localStorage.getItem('username');
    const userRecords = records.filter(record => record.user === username);

    const historyList = document.getElementById('historyList');
    historyList.innerHTML = '';

    userRecords.forEach(record => {
        const listItem = document.createElement('li');
        listItem.textContent = `Día: ${record.day}, Opción 1: ${record.option1}, Opción 2: ${record.option2}`;
        historyList.appendChild(listItem);
    });
}

function isAuthenticated() {
    return localStorage.getItem('authenticated') === 'true';
}

function logout() {
    localStorage.removeItem('authenticated');
    localStorage.removeItem('username');
    localStorage.removeItem('role');
    window.location.href = 'index.html';
}
