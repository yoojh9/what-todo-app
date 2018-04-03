import firebase from 'firebase'

const config  = {
  apiKey: "AIzaSyDCayI5N1f_WUKhYXDImJNbz2f3dLzt7d0",
  authDomain: "what-todo-app.firebaseapp.com",
  databaseURL: "https://what-todo-app.firebaseio.com",
  projectId: "what-todo-app",
  storageBucket: "what-todo-app.appspot.com",
  // messagingSenderId: "362830927441"
};

firebase.initializeApp(config);

export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth
