# Gourmet Chat 

Une application de chat simple pour les passionnés de gastronomie, permettant de discuter et de faire des rencontres autour de la cuisine.

##  Fonctionnalités

- Inscription des utilisateurs avec leurs préférences culinaires
- Liste des utilisateurs inscrits
- Envoi et réception de messages
- Interface simple et intuitive

## Technologies Utilisées

- **Backend**: Python/FastAPI
- **Frontend**: HTML/CSS/JavaScript
- **Base de données**: PostgreSQL
- **Conteneurisation**: Docker & Docker Compose

## 📁 Structure du Projet

```
project/
├── backend/
│   ├── app/
│   │   ├── __init__.py
│   │   ├── database.py    # Configuration de la base de données
│   │   ├── main.py        # Points d'entrée API
│   │   ├── models.py      # Modèles SQLAlchemy
│   │   └── schemas.py     # Schémas Pydantic
│   ├── requirements.txt   # Dépendances Python
│   └── Dockerfile
├── frontend/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── app.js
│   ├── index.html
│   └── Dockerfile
└── docker-compose.yml
```

## Prérequis

- Docker
- Docker Compose

## Installation et Démarrage

1. Cloner le repository :
```bash
git clone <url-du-repo>
cd gourmet-chat
```

2. Lancer l'application :
```bash
docker-compose up --build
```

L'application sera disponible sur :
- Frontend : http://localhost:80
- API Backend : http://localhost:8000
- Documentation API (Swagger) : http://localhost:8000/docs

## 🎯 Utilisation

1. **Inscription**
   - Accédez à l'application via http://localhost
   - Remplissez le formulaire d'inscription avec :
     - Nom d'utilisateur
     - Préférences culinaires

2. **Envoi de messages**
   - Une fois inscrit, utilisez la zone de chat pour envoyer des messages
   - Les messages sont affichés dans l'ordre chronologique
   - La liste des utilisateurs est visible sur le côté gauche

## 📡 API Endpoints

- `POST /users` : Création d'un nouvel utilisateur
- `GET /users` : Liste des utilisateurs
- `POST /messages` : Envoi d'un message
- `GET /messages` : Récupération des messages

## 🔧 Variables d'Environnement

Configuration dans `docker-compose.yml` :
```yaml
DATABASE_URL=postgresql://user:password@db:5432/chatdb
```
