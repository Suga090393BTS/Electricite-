# ⚡ Gestion Électrique — N°7 Taverny

Application web pour gérer les circuits électriques de la maison : recherche/dépannage,
fiches par pièce, schémas des tableaux de fusibles, plans avec pastilles, et audit.
Tout fonctionne dans le navigateur, sur ordinateur, tablette et téléphone, et hors-ligne.

---

## 📁 Fichiers du dépôt

| Fichier | Rôle |
|---|---|
| `index.html` | **L'application complète** (les plans de la maison sont intégrés dedans). C'est le fichier principal. |
| `sw.js` | Service worker — permet à l'app de fonctionner **hors-ligne** une fois ouverte. |
| `README.md` | Ce guide. |

> Les fichiers du dossier `pdf/` et `plans/` ne sont **pas nécessaires** pour le site
> (les plans sont déjà intégrés dans `index.html`). Inutile de les téléverser.

---

## 🚀 Mettre l'app en ligne avec GitHub Pages

1. Créez un compte gratuit sur **https://github.com** (si ce n'est pas déjà fait).
2. En haut à droite : **+ → New repository**.
   - **Repository name** : par ex. `electricite-taverny`
   - Cochez **Public**, puis **Create repository**.
3. Sur la page du dépôt : **Add file → Upload files**.
   - Glissez **`index.html`** et **`sw.js`** (et `README.md` si vous voulez).
   - Cliquez **Commit changes**.
4. Onglet **Settings** → menu de gauche **Pages**.
   - **Source** : *Deploy from a branch*
   - **Branch** : *main* / *(root)* → **Save**.
5. Patientez ~1 minute, puis rechargez la page **Pages** :
   votre adresse apparaît, du type
   **`https://VOTRE-NOM.github.io/electricite-taverny/`**

C'est en ligne ! La même adresse fonctionne sur tous les appareils.

---

## 📱 Installer sur iPhone / iPad (et pour vos parents)

1. Ouvrez l'adresse dans **Safari**.
2. Touchez le bouton **Partager** (carré avec une flèche ↑).
3. Choisissez **« Sur l'écran d'accueil »** → **Ajouter**.
4. L'icône ⚡ apparaît : l'app s'ouvre en plein écran et marche hors-ligne.

Sur **Android** : ouvrez l'adresse dans Chrome → menu ⋮ → **Ajouter à l'écran d'accueil**.

---

## 🔒 Code d'accès

À l'ouverture, l'app demande un **code**. Le code par défaut est :

```
0707
```

### Changer le code
1. Ouvrez `index.html` (sur GitHub : cliquez le fichier puis l'icône crayon ✏️).
2. Tout en haut du script, modifiez la ligne :
   ```js
   const ACCESS_CODE = "0707";
   ```
   Mettez votre code entre les guillemets (ex. `"1234"`), ou `""` (vide) pour **désactiver** le verrou.
3. **Commit changes**. Le nouveau code s'applique à la prochaine ouverture.

> ⚠️ Ce code empêche l'accès **occasionnel** mais n'est pas un chiffrement fort :
> une personne techniquement avertie pourrait lire le contenu dans le code source.
> Ne diffusez pas l'adresse publiquement si les plans doivent rester privés.

Pour **se déverrouiller à nouveau** sur un appareil (re-demander le code) :
*Réglages → Sécurité → Verrouiller maintenant*.

---

## 💾 Sauvegarde des données

Chaque appareil enregistre **ses propres** modifications (dans le navigateur).
Ce que vous saisissez sur l'ordinateur **n'apparaît pas automatiquement** sur l'iPad.

- **Exporter** : *Réglages → Exporter une sauvegarde* (fichier `.json`).
- **Importer** : *Réglages → Importer une sauvegarde* sur l'autre appareil.

Pensez à exporter de temps en temps, surtout après de grosses modifications.

---

## 🔄 Mettre à jour l'application

Pour publier une nouvelle version : remplacez **`index.html`** dans le dépôt
(**Add file → Upload files**, même nom, *Commit*). Le site se met à jour tout seul
en ~1 minute. Vos données saisies ne sont pas touchées (elles sont sur l'appareil).

---

*Données extraites des documents Drive : ELECTRICITE, TABLEAUX, MODULES, PIÈCES.
À vérifier sur place — coupez le courant au tableau général avant toute intervention.*
