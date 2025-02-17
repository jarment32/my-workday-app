document.addEventListener("DOMContentLoaded", function() {
    // Verifica si el usuario está autenticado
    if (!isAuthenticated()) {
        window.location.href = 'index.html';
    }

    // Simulación de datos de jornadas registradas
    const records = [
        { user: 'usuario1', day: '2025-02-16', option1: 'Opción 1A', option2: 'Opción 2B' },
        { user: 'usuario2', day: '2025-02-15', option1: 'Opción 1B', option2: 'Opción 2C' },
        { user: 'usuario3', day: '2025-02-14', option1: 'Opción 1C', option2: 'Opción 2A' },
    ];

    const tbody = document.querySelector('#recordsTable tbody');
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
});

function isAuthenticated() {
    return localStorage.getItem('authenticated') === 'true';
}
