var app_firebase = {};

(function(){
  var firebaseConfig = {
    apiKey: "AIzaSyBgphtiGKOpR2vpPQgTAmcpqsd_qjCc2Mg",
    authDomain: "project-1-e2a0a.firebaseapp.com",
    databaseURL: "https://project-1-e2a0a.firebaseio.com",
    projectId: "project-1-e2a0a",
    storageBucket: "project-1-e2a0a.appspot.com",
    messagingSenderId: "490111328192",
    appId: "1:490111328192:web:914b568335a000ea"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  app_firebase = firebase;
})()
