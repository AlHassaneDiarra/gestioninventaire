# 📦 Gestion d’Inventaire – Django + React

## 📌 Description

Ce projet est une application **full-stack** de gestion d’inventaire développée avec :  
- **Django (backend, API REST, base de données SQLite)**  
- **React (frontend, interface utilisateur moderne)**  

Elle permet de :  
- Ajouter, modifier et supprimer des produits,  
- Consulter la liste des articles disponibles,  
- Gérer les quantités en stock,  
- Fournir une API REST pour l’intégration avec d’autres systèmes.  

---

## 📂 Structure du projet

gestion-inventaire/
│── Pipfile # Dépendances Python (Pipenv)
│── Pipfile.lock
│
├── backend/ # Backend Django
│ ├── manage.py
│ ├── db.sqlite3 # Base de données SQLite
│ ├── backend/ # Configuration principale
│ │ ├── settings.py
│ │ ├── urls.py
│ │ ├── wsgi.py
│ │ └── asgi.py
│ │
│ └── inventory/ # Application Django "inventory"
│ ├── models.py # Définition des produits
│ ├── views.py # Logique métier / API REST
│ ├── serializers.py # Sérialisation des données
│ ├── admin.py # Intégration Django Admin
│ └── migrations/ # Historique des migrations
│
└── frontend/ # Frontend React
├── package.json # Dépendances npm
├── package-lock.json
├── public/ # Fichiers statiques
├── src/ # Code source React
└── node_modules/ # Modules installés


---

## ⚙️ Technologies utilisées

### Backend
- **Python 3.x**  
- **Django**  
- **Django REST Framework (DRF)**  
- **SQLite3** (base de données par défaut)  

### Frontend
- **React.js**  
- **Node.js & npm**  
- **Axios** (requêtes HTTP vers l’API)  

---

## 🚀 Installation et exécution

### 1️⃣ Cloner le projet
```bash
git clone https://github.com/AlHassaneDiarra/gestioninventaire
cd gestion-inventaire

2️⃣ Lancer le backend (Django)
cd backend
pipenv install   # installe les dépendances
pipenv shell     # active l’environnement virtuel
python manage.py migrate
python manage.py runserver


➡️ Le backend tourne sur http://127.0.0.1:8000/

3️⃣ Lancer le frontend (React)
cd frontend
npm install
npm start


➡️ Le frontend tourne sur http://localhost:3000/

🔧 Fonctionnalités principales

Côté backend (API REST Django)

CRUD complet sur les produits (GET, POST, PUT, DELETE)

Gestion du stock en temps réel

Intégration Django Admin

Côté frontend (React)

Interface utilisateur pour afficher les produits

Formulaires pour ajouter / modifier un produit

Boutons de suppression

Connexion à l’API Django via Axios

📡 Utilisation

Démarrer le backend Django (python manage.py runserver)

Démarrer le frontend React (npm start)

Accéder à l’application via http://localhost:3000

Ajouter / modifier / supprimer des produits dans l’inventaire

📜 Licence

Ce projet est sous licence MIT – libre d’utilisation et de modification.

👨‍💻 Auteur

Projet développé par Al Hassane Diarra
