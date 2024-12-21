const API_URL = 'http://localhost:8000';

// Inscription d'un utilisateur
async function registerUser() {
    const username = document.getElementById('username').value;
    const foodPreferences = document.getElementById('foodPreferences').value;

    try {
        const response = await fetch(`${API_URL}/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, food_preferences: foodPreferences })
        });
        const data = await response.json();
        alert('Inscription réussie !');
        loadUsers();
    } catch (error) {
        alert('Erreur lors de l\'inscription');
    }
}

// Chargement des utilisateurs
async function loadUsers() {
    try {
        const response = await fetch(`${API_URL}/users`);
        const users = await response.json();
        const usersList = document.getElementById('usersList');
        usersList.innerHTML = users.map(user =>
            `<div>${user.username} - ${user.food_preferences}</div>`
        ).join('');
    } catch (error) {
        console.error('Erreur lors du chargement des utilisateurs:', error);
    }
}

// Envoi d'un message
async function sendMessage() {
    const content = document.getElementById('messageInput').value;
    if (!content) return;

    try {
        const response = await fetch(`${API_URL}/messages`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                content,
                sender_id: 1 // À modifier avec l'ID de l'utilisateur connecté
            })
        });
        const data = await response.json();
        document.getElementById('messageInput').value = '';
        loadMessages();
    } catch (error) {
        alert('Erreur lors de l\'envoi du message');
    }
}

// Chargement initial
document.addEventListener('DOMContentLoaded', () => {
    loadUsers();
});