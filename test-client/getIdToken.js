const { signInWithEmailAndPassword } = require('firebase/auth');
const { auth } = require('../config/firebase');

const getIdToken = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const idToken = await userCredential.user.getIdToken();
        return idToken;
    } catch (error) {
        console.error('Error signing in:', error);
        throw error;
    }
};

module.exports = getIdToken;

