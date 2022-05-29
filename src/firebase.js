import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCL6Vbt7PAe3MYrVX5y4j8CO-NmuyfoSW4",
  authDomain: "yonwarigobu.firebaseapp.com",
  projectId: "yonwarigobu",
  storageBucket: "yonwarigobu.appspot.com",
  messagingSenderId: "528746038971",
  appId: "1:528746038971:web:cb2af566b172bbe5eacb9e",
  measurementId: "G-2L0LX007GB",
}

// Firebaseアプリオブジェクトを初期化
const app = initializeApp(firebaseConfig)
// Firestoreを読み込み、db(databaseの略)として export
export const db = getFirestore(app)
