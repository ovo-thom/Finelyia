# Finelyia

> Gérez vos finances simplement et efficacement

Finelyia est une application web de gestion de finances personnelles, développée avec React, Vite, et Firebase. Elle permet de suivre ses transactions, visualiser ses dépenses par catégorie, et gérer son solde, avec une interface moderne et multilingue (français/anglais).

## Fonctionnalités principales

- Authentification sécurisée avec Firebase
- Ajout, suppression et affichage des transactions
- Visualisation des dépenses par catégorie grâce à des graphiques
- Tableau de bord synthétique par utilisateur
- Mode sombre et clair
- Internationalisation complète en français et en anglais
- Données isolées pour chaque utilisateur

## Technologies utilisées

- React
- Vite
- Firebase Auth
- Tailwind CSS
- Chart.js & react-chartjs-2
- i18next pour la gestion multilingue

## Installation

1. Cloner le dépôt
   git clone <url-du-repo>
   cd Finelyia

2. Installer les dépendances
   npm install

3. Configurer Firebase

   Créez un projet Firebase et activez l’authentification par email et mot de passe.

   Ajoutez ensuite un fichier .env à la racine du projet avec vos variables d’environnement :

   VITE_FIREBASE_API_KEY=xxx
   VITE_FIREBASE_AUTH_DOMAIN=xxx
   VITE_FIREBASE_PROJECT_ID=xxx
   VITE_FIREBASE_STORAGE_BUCKET=xxx
   VITE_FIREBASE_MESSAGING_SENDER_ID=xxx
   VITE_FIREBASE_APP_ID=xxx

4. Lancer l’application en développement
   npm run dev

## Scripts npm

- npm run dev : lancer le serveur de développement
- npm run build : construire l’application pour la production
- npm run preview : prévisualiser la version compilée
- npm run lint : analyser la qualité du code

## Utilisation

Après connexion ou inscription, vous pouvez ajouter vos propres revenus et dépenses, puis consulter vos statistiques personnelles dans le tableau de bord.

## Objectif du projet

Ce projet a été créé pour démontrer mes compétences en développement front-end moderne, en intégration de services cloud, et en création d’interfaces interactives orientées données.

---

Développé par Thomas Thonnard
