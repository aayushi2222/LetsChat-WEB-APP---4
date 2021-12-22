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

    user_name = localStorage.getItem("Username");
    document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

    function addroom() {
           room_name = document.getElementById("room_name").value;

           firebase.database().ref("/").child(room_name).update({
                purpose: "Adding Room Name"
          });
  
          localStorage.setItem("Roomname",room_name);
      
          window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
          console.log("room_name - " + Room_names);
          row = "<div class='room_name' id="+Room_names+" onclick='redirectToroomname(this.id)'>#"+Room_names+"</div><hr>";
          document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData();
function redirectToroomname(name){
    console.log(name);
    localStorage.setItem("Roomname",name);
    window.location = "kwitter_page.html";
}
function logout() {
    localStorage.removeItem("Username");
    localStorage.removeItem("Roomname");
    window.location = "index.html";
}