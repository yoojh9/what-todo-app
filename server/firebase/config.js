import firebase from 'firebase'

const config  = {
  apiKey: "apiKey",
  authDomain: "authDomain",
  databaseURL: "databaseUrl",
  projectId: "projectId",
  storageBucket: "storageBucket",
  // messagingSenderId: "362830927441"
};

firebase.initializeApp(config);

export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth
