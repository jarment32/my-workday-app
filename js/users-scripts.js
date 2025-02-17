document.addEventListener("DOMContentLoaded", function() {
    // Inicializar usuarios por defecto si no hay ninguno en localStorage
    if (!localStorage.getItem('users')) {
        const defaultUsers = [
            { username: 'admin', password: 'admin', role: 'admin' },
            { username: 'user1', password: 'user1', role: 'user' },
        ];
        localStorage.setItem('users', JSON.stringify(defaultUsers));
    }
});
