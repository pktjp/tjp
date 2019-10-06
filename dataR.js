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



var rootRef = firebase.database().ref().child("messages1");
	
	rootRef.on("child_added", snap =>{
		
		//alert(snap.val());
		var name = snap.child("name").val();
		var message = snap.child("message").val();
		//alert(name);
		
		
		//$("#table_body").append("Name: "+ name + " message: " + message +"<br></br>");
		$("#table_body").append("<tr><td>"+ name + "</td><td>" + message +"</td></tr>");
	});
