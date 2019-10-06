var firebaseConfig = {
   apiKey: "AIzaSyADWK7m0SVic8-dquHB5sw7__V7j_UV8FA",
   authDomain: "console-f8d1b.firebaseapp.com",
   databaseURL: "https://console-f8d1b.firebaseio.com",
   projectId: "console-f8d1b",
   storageBucket: "",
   messagingSenderId: "581881243119",
   appId: "1:581881243119:web:23218011ad5b893e0b421a"
 };
 // Initialize Firebase
firebase.initializeApp(firebaseConfig);
var messagesRef = firebase.database().ref('messages1');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);
document.getElementById('notice').style.display = 'none';
// Submit form function here
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name'); //getInputVal('name');
  //var company = getInputVal('company');
  var email = getInputVal('email');
  //var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, email, message);

  // Show alert
  //document.querySelector('.notice').style.display = 'block';
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
    document.location.href="index.html";
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
    //company:company,
    email:email,
    //phone:phone,
    message:message
  });
}