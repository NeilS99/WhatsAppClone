import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCKelfzAI04WQ9Wj9nkhCfxb7Mst683Gyk",
  authDomain: "whatsappclone-2e2c6.firebaseapp.com",
  projectId: "whatsappclone-2e2c6",
  storageBucket: "whatsappclone-2e2c6.appspot.com",
  messagingSenderId: "514859452869",
  appId: "1:514859452869:web:2f781905822f60277523ac",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
