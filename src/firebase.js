import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBfJKPRk7vTIZhJDhRrXKPwvADBFyF24QY',
  authDomain: 'disney-plus-e9b2d.firebaseapp.com',
  projectId: 'disney-plus-e9b2d',
  storageBucket: 'disney-plus-e9b2d.appspot.com',
  messagingSenderId: '799587797755',
  appId: '1:799587797755:web:c9875efbf33f54d176be5e',
  measurementId: 'G-HJ0J584EM4',
}
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const storage = firebase.storage()

export { auth, provider, storage }
export default db
