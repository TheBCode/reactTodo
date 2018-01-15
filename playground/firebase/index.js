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
});

// firebaseRef.child('app').once('value').then((snapshot) => {
//     console.log('Got entire database',snapshot.key, snapshot.val());
// }, (e) => {
//     console.log('Unable to fetch', e);
// });
// var logData = (snapshot) => {
//     console.log('Got value', snapshot.val());
// };
// firebaseRef.on('value', logData);
//
// firebaseRef.off();
//
// firebaseRef.update({isRunning: false});

// firebaseRef.child('user').on('value', (snapshot) => {
//     console.log('user ref changed', snapshot.val());
// });
//
// firebaseRef.child('user').update({name: 'Mike'});
// firebaseRef.child('app').update({name: 'Something Else'});

var todosRef = firebaseRef.child('todos');
