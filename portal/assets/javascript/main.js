var mainApp = {};

(function(){
var firebase = app_firebase;
var uid = null;
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // User is signed in.
            uid = user.uid;
        } else {
            // If the user is not logged in they will be redirected to the login page
            uid = null;
            window.location.replace('index.html')
        }
      });
    function log_out(){
        firebase.auth().signOut();
    }

    mainApp.log_out = log_out;
})()