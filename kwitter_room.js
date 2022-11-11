
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyBU0lAiIOW2NSWreA4XON7kMXlTLUYt164",
  authDomain: "cls-95.firebaseapp.com",
  databaseURL: "https://cls-95-default-rtdb.firebaseio.com",
  projectId: "cls-95",
  storageBucket: "cls-95.appspot.com",
  messagingSenderId: "75767770561",
  appId: "1:75767770561:web:c9da7508380fef6997d340",
  measurementId: "G-6YPP6THD2J"
};

// Initialize Firebase
  firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");


     document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";


      function addRoom() 
      {
         room_name = document.getElementById("room_name").value;
       firebase.database().ref("/").child(room_name).update({ 
        purpose : "adding room name" 
      });
        localStorage.setItem("room_name", room_name);
         window.location = "kwitter_page.html"; 
      }

      

      function getData()
       {
         firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = "";
       snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; 
        Room_names = childKey; 
        console.log("Room Name - " + Room_names);
         row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
          document.getElementById("output").innerHTML += row; 
        });
       });
      }

      getData();

        function redirectToRoomName(name){
          console.log("name");
          localStorage.setItem("room_name", name);
          window.location="kwitter_page.html";
        }

       function logout()
      {
        localStorage.removeItem("user_name");
        localStorage.removeItem("room_name");
        window.location="index.html";
      }
       

  