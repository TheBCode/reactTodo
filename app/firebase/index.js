import firebase from 'firebase';

try{
    var config = {
        apiKey: "AIzaSyCHwHdlKTZz5zvQfwMwYTu29lMQBr2IHDQ",
        authDomain: "todo-app-682df.firebaseapp.com",
        databaseURL: "https://todo-app-682df.firebaseio.com",
        projectId: "todo-app-682df",
        storageBucket: "todo-app-682df.appspot.com",
        messagingSenderId: "210032184675",
        appId: "1:210032184675:web:8e5255ebaa83db87d49756"
    };
    firebase.initializeApp(config);
} catch(e) {

}

export var githubProvider = new firebase.auth.GithubAuthProvider();
export var firebaseRef = firebase.database().ref();
export default firebase;
