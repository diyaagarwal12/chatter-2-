// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAupXkmXUROuKbaSAYrVY7xj_YlaNcVYfI",
    authDomain: "practice-activity-86343.firebaseapp.com",
    databaseURL: "https://practice-activity-86343-default-rtdb.firebaseio.com",
    projectId: "practice-activity-86343",
    storageBucket: "practice-activity-86343.appspot.com",
    messagingSenderId: "994780292811",
    appId: "1:994780292811:web:e868ec82d2364726195d4e",
    measurementId: "G-WV922PLJ2R"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addRoom(){
      user_name= document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          purpose:"adding user"
      });
  }
 