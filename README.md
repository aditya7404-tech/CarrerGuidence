# Career Guidance - One-day Prototype


## What is included
- Basic multi-page web app (HTML/CSS/JS)
- Firebase Authentication (Email/Password)
- Firestore for storing users and colleges
- Admin page to add/delete colleges
- Aptitude test with score saving


## Setup (quick)
1. Create a Firebase project at https://console.firebase.google.com/
2. Enable Authentication -> Email/Password
3. Create a Cloud Firestore database (start in test mode for quick dev)
4. Copy your Firebase config object (Project settings -> SDK) into `firebase-config.js`
5. (Optional) Create an admin user manually via Firebase Authentication (email/password)
6. Host the files locally: open `index.html` in browser or use a simple static server


## Run locally (recommended)
- Use VSCode Live Server or `npx serve` to serve the folder.


## GitHub
- Initialize repo, add files, commit, push to a public GitHub repo
- Include this README as the repo README


## Deployment
- Optional: Deploy to Firebase Hosting or GitHub Pages


## Notes & Next steps
- Add validation and better UI
- Add logging: store action logs to a Firestore collection `logs` on key actions
- Add role checks (check admin UID) for admin page security