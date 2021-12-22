

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD1hNw2kavT1UBT0KwosoT5I-70clD713w",
    authDomain: "letschat-13f16.firebaseapp.com",
    databaseURL: "https://letschat-13f16-default-rtdb.firebaseio.com",
    projectId: "letschat-13f16",
    storageBucket: "letschat-13f16.appspot.com",
    messagingSenderId: "1024343018793",
    appId: "1:1024343018793:web:2b6e211f41a47f6ab47b38",
    measurementId: "G-94GL25PWQB"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  room_name = localStorage.getItem("Roomname");
  user_name = localStorage.getItem("Username");

  console.log("room name "+room_name);
  console.log("user name "+user_name);

  function logout() {
        localStorage.removeItem("Roomname");
        localStorage.removeItem("Username");
        window.location.replace("index.html");
  }
  function send() {
        msg = document.getElementById("msg").value;
        console.log("Message "+msg);
        firebase.database().ref(room_name).push({
              name:user_name,
              message:msg,
              like:0,
              dislike:0
        });
        document.getElementById("msg").value = "";
  }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
    } });  }); }
getData();
