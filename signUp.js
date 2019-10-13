// listen for auth status changes
auth.onAuthStateChanged(user => {
  if (user) {
    console.log('user logged in: ', user);
	document.getElementById('hide').style.display='block';
	document.getElementById('tagIn').style.display='none';
	document.getElementById('tagUp').style.display='none';
	document.getElementById('logout').style.display='block';
	document.getElementById('header1').style.display='none';
	document.getElementById('msg').style.display='block';
	
    
  } else {
    console.log('user logged out');
	document.getElementById('hide').style.display='none';
	document.getElementById('tagIn').style.display='block';
	document.getElementById('tagUp').style.display='block';
	document.getElementById('logout').style.display='none';
	document.getElementById('header1').style.display='block';
	document.getElementById('msg').style.display='none';
    
  }
})

// signup
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // get user info
  const email = signupForm['signup-email'].value;
  const password = signupForm['signup-password'].value;

  // sign up the user
  auth.createUserWithEmailAndPassword(email, password).then(cred => {
    // close the signup modal & reset form
    const modal = document.querySelector('#modal-signup');
    document.querySelector('#signup-form').reset();
	M.Modal.getInstance(modal).close();
  });
});

// logout
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
  e.preventDefault();
  auth.signOut();
});

// login
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // get user info
  const email = loginForm['login-email'].value;
  const password = loginForm['login-password'].value;

  // log the user in
  auth.signInWithEmailAndPassword(email, password).then((cred) => {
    // close the signup modal & reset form
    const modal = document.querySelector('#modal-login');
    
    //loginForm.reset();
	document.querySelector('#login-form').reset();
	M.Modal.getInstance(modal).close();
  });

});