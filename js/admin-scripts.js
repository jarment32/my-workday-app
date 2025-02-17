document.addEventListener("DOMContentLoaded", function() {
    // Verifica si el usuario está autenticado
    if (!isAuthenticated() || localStorage.getItem('role') !== 'admin') {
        window.location.href = 'index.html';
    }

    loadUsers();
    loadRecords();

    document.getElementById('addUserForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const newUsername = document.getElementById('newUsername').value;
        const newPassword = document.getElementById('newPassword').value;
        const newRole = document.getElementById('newRole').value;

        // Obtener usuarios almacenados en localStorage
        const users = JSON.parse(localStorage.getItem('users')) || [];

        // Añadir el nuevo usuario a la lista
        users.push({ username: newUsername, password: newPassword, role: newRole });

        // Guardar la lista de usuarios en localStorage
        localStorage.setItem('users', JSON.stringify(users));

        loadUsers();
    });
});

function loadUsers() {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const tbody = document.querySelector('#usersTable tbody');
    tbody.innerHTML = '';

    users.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.username}</td>
            <td>${user.role}</td>
            <td><button onclick="deleteUser('${user.username}')">Eliminar</button></td>
        `;
        tbody.appendChild(row);
    });
}

function deleteUser(username) {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    users = users.filter(user => user.username !== username);
    localStorage.setItem('users', JSON.stringify(users));
    loadUsers();
}

function loadRecords() {
    const records = JSON.parse(localStorage.getItem('records')) || [];
    const tbody = document.querySelector('#recordsTable tbody');
    tbody.innerHTML = '';

    records.forEach(record => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${record.user}</td>
            <td>${record.day}</td>
            <td>${record.option1}</td>
            <td>${record.option2}</td>
        `;
        tbody.appendChild(row);
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
