import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: 'AIzaSyD0cLgN6xl4y7cmKlPmQXlznwfFTaRh7wY',
  authDomain: 'zandaka-877bb.firebaseapp.com',
  projectId: 'zandaka-877bb',
  storageBucket: 'zandaka-877bb.appspot.com',
  messagingSenderId: '1052928159244',
  appId: '1:1052928159244:web:8ab2163b6ab130f9878829',
}

const initializeFirebase = firebase.initializeApp(firebaseConfig)
const initializeFirestore = firebase.firestore()
const initializeAnalytics = firebase.analytics

firebase.firestore().settings({ timestampsInSnapshots: true })

window.firebase = firebase

export { initializeFirestore, initializeAnalytics }
export default initializeFirebase
