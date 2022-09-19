var firebaseConfig = {
      apiKey: "AIzaSyD6THakeFYQbo5y1CLkDYfxUhenePv9Fss",
      authDomain: "kwitter-7f36f.firebaseapp.com",
      databaseURL: "https://kwitter-7f36f-default-rtdb.firebaseio.com",
      projectId: "kwitter-7f36f",
      storageBucket: "kwitter-7f36f.appspot.com",
      messagingSenderId: "359581654876",
      appId: "1:359581654876:web:6e8f89124298a8080d2b99",
      measurementId: "G-J3PWT2R4L3"
    };
    
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="welcome " +user_name+"!";
  function addroom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
            
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
  }
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room name"+ Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirecttoroomname(this.id)' >#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirecttoroomname(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html"
}