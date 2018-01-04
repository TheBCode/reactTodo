import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBl8K2dqfzY6oRnYAounTIeMcwK0wr0k1U",
    authDomain: "buyck-todo-app.firebaseapp.com",
    databaseURL: "https://buyck-todo-app.firebaseio.com",
    projectId: "buyck-todo-app",
    storageBucket: "buyck-todo-app.appspot.com",
    messagingSenderId: "120262078976"
};
firebase.initializeApp(config);

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
}).then(() => {
    console.log('set worked');
}, (e) => {
    console.log('set failed');
});

// firebaseRef.set({
//     appName: 'Todo Application'
// });
firebaseRef.child('user').set({
    name: 'Mike'
});

firebaseRef.child('app').set({
    name: 'Todo App'
});