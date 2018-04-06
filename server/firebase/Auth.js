import { db, firebaseAuth, googleProvider } from './config'

export function auth (email, pw) {
  return firebaseAuth().createUserWithEmailAndPassword(email, pw)
    .then(saveUser)
}

export function logout () {
  return firebaseAuth().signOut()
}

export function login (email, pw) {
  return firebaseAuth().signInWithEmailAndPassword(email, pw)
}

export function loginWithGoogle() {
  //  return firebaseAuth().signInWithRedirect(googleProvider);
  return firebaseAuth().signInWithPopup(googleProvider);
}

export function currentUser(){
  return firebaseAuth().currentUser;
}

export function resetPassword (email) {
  return firebaseAuth().sendPasswordResetEmail(email)
}

export function saveUser (user) {
  return db.child(`users/${user.uid}`)
    .set({
      uid: user.uid,
      email: user.email,
      name: user.displayName,
    })
    .then(() => user)
}
