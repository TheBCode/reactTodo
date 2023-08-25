import firebase from 'firebase';

try{
var config = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID
};
firebase.initializeApp(config);
} catch (e){

}

var firebaseRef = firebase.database().ref();

firebaseRef.set({
    app: {
        name: 'Todo App',
        version: '1.0.1'
    },
    isRunning: true,
    user: {
        name: 'Byron',
        age: 31
    }
});


var todosRef = firebaseRef.child('todos');
