var firebaseConfig = {
   apiKey: "AIzaSyADWK7m0SVic8-dquHB5sw7__V7j_UV8FA",
   authDomain: "console-f8d1b.firebaseapp.com",
   databaseURL: "https://console-f8d1b.firebaseio.com",
   projectId: "console-f8d1b",
   storageBucket: "",
   messagingSenderId: "581881243119",
   appId: "1:581881243119:web:23218011ad5b893e0b421a"
 };
 
firebase.initializeApp(firebaseConfig);
var messagesRef = firebase.database().ref('comment2');


document.getElementById('contactForm').addEventListener('submit', submitForm);
document.getElementById('notice').style.display = 'none';

function submitForm(e){
  e.preventDefault();

  
  var name = getInputVal('name'); 
  var email = getInputVal('email');
  
  var message = getInputVal('message');

  
  saveMessage(name, email, message);

  
  document.getElementById('notice').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    //document.querySelector('.notice').style.display = 'none';
	document.getElementById('notice').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();

  //redirect to home page

  setTimeout(function(){
    document.location.href="Episodes.html";
  },3050);


}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    
    email:email,
    
    message:message
  });
}