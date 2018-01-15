import firebase from 'firebase';

try{
    var config = {
        apiKey: "AIzaSyBl8K2dqfzY6oRnYAounTIeMcwK0wr0k1U",
        authDomain: "buyck-todo-app.firebaseapp.com",
        databaseURL: "https://buyck-todo-app.firebaseio.com",
        projectId: "buyck-todo-app",
        storageBucket: "buyck-todo-app.appspot.com",
        messagingSenderId: "120262078976"
    };
    firebase.initializeApp(config);
} catch(e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;