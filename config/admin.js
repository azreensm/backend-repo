const admin = require("firebase-admin");
const serviceAccount = require("../ebuddy-project-36cf6-firebase-adminsdk-p4gt1-2fb973b191.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

module.exports = { admin, db };