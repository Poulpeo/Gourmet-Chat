# Gourmet Chat

Une application de chat simple pour connecter les passionnés de gastronomie et faire de nouvelles rencontres.

## 🎯 Fonctionnalités

- Chat en temps réel basique
- Profils utilisateurs simples
- Salons de discussion publics
- Messages privés
- Partage de photos

## 🛠 Stack Technique

- **Backend**: Node.js + Express + Socket.io
- **Frontend**: HTML + CSS + JavaScript vanilla
- **Base de données**: SQLite
- **Conteneurisation**: Docker

## 🚀 Installation

1. Cloner le projet :
```bash
git clone https://github.com/username/gourmet-chat
cd gourmet-chat
```

2. Lancer avec Docker :
```bash
docker-compose up
```

L'application sera disponible sur `http://localhost:3000`

## 📁 Structure du Projet

```
project/
├── backend/
│   ├── src/
│   │   ├── server.js      # Serveur Express + Socket.io
│   │   ├── db.js          # Configuration SQLite
│   │   └── routes.js      # Routes API
│   ├── Dockerfile
│   └── package.json
├── frontend/
│   ├── index.html
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   ├── chat.js        # Logique du chat
│   │   └── app.js         # Application principale
│   └── Dockerfile
└── docker-compose.yml
```

## ⚙️ Configuration

Fichier `config.js` à la racine :

```javascript
module.exports = {
  port: 3000,
  dbPath: './database.sqlite',
  secret: 'votre_secret'
}
```

## 🔒 Sécurité de base

- Authentification simple par session
- Validation des entrées
- Modération basique des contenus

## 📝 Évolutions possibles

- [ ] Ajout d'emojis
- [ ] Liste des utilisateurs en ligne
- [ ] Historique des conversations
- [ ] Système de likes

## 📄 Licence

MIT
