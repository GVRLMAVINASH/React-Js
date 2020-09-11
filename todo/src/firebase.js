import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB6VHG5zr8BD8IaFtZyUzVhtP46v8DqmTw",
    authDomain: "todo-e6998.firebaseapp.com",
    databaseURL: "https://todo-e6998.firebaseio.com",
    projectId: "todo-e6998",
    storageBucket: "todo-e6998.appspot.com",
    messagingSenderId: "589447246150",
    appId: "1:589447246150:web:51334617f424460ede3547",
    measurementId: "G-M95XSQWQH9"
 
});
const db = firebaseApp.firestore();
// export {db};
export default db;