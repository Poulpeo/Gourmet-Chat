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

// Variable globale pour stocker l'utilisateur connecté
let currentUser = null;

// Modification de la fonction registerUser
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
        // Stocker l'utilisateur connecté
        currentUser = data;
        alert('Inscription réussie !');
        loadUsers();
        // Afficher un message de confirmation avec l'ID
        console.log('Votre ID utilisateur est : ' + currentUser.id);
    } catch (error) {
        alert('Erreur lors de l\'inscription');
    }
}

// Modification de la fonction sendMessage
async function sendMessage() {
    const content = document.getElementById('messageInput').value;
    if (!content || !currentUser) {
        alert('Veuillez vous inscrire avant d\'envoyer un message');
        return;
    }

    try {
        const response = await fetch(`${API_URL}/messages`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                content,
                sender_id: currentUser.id
            })
        });
        const data = await response.json();
        document.getElementById('messageInput').value = '';
        loadMessages();
    } catch (error) {
        alert('Erreur lors de l\'envoi du message');
    }
}

// Ajout de la fonction pour charger les messages
async function loadMessages() {
    try {
        const response = await fetch(`${API_URL}/messages`);
        const messages = await response.json();
        const messagesList = document.getElementById('messagesList');
        messagesList.innerHTML = messages.map(message =>
            `<div class="message">
                <strong>Utilisateur ${message.sender_id}:</strong> ${message.content}
            </div>`
        ).join('');
    } catch (error) {
        console.error('Erreur lors du chargement des messages:', error);
    }
}