function dropdown(){
  document.getElementById("dropdown").style.display="block";
  document.getElementById("show").style.display="none";
  document.getElementById("hide").style.display="block";
  document.getElementById("login").style.display="none";
}
function hide(){
  document.getElementById("dropdown").style.display="none";
  document.getElementById("hide").style.display="none";
  document.getElementById("show").style.display="block";
}
function showform(){
  document.getElementById("login").style.display="block";
  document.getElementById("dropdown").style.display="none";
  document.getElementById("hide").style.display="none";
  document.getElementById("show").style.display="block";
  document.getElementById("signup").style.display="none";
}
function hideform(){
  document.getElementById("login").style.display="none";
  document.getElementById("signup").style.display="none";
}
function checkbtn(){
  document.getElementById("buttonbtn").style.display="block";
}
function showsignup(){
  document.getElementById("signup").style.display="block";
  document.getElementById("dropdown").style.display="none";
  document.getElementById("hide").style.display="none";
  document.getElementById("show").style.display="block";
  document.getElementById("login").style.display="none";
}
function buy(){
  document.getElementById("login").style.display="block";
}
function hide_eye(){
  document.getElementById('pword').type ='text';
  document.getElementById("show_eye").style.display="inline";
  document.getElementById("hide_eye").style.display="none";
}
function show_eye(){
  document.getElementById('pword').type ='password';
  document.getElementById("hide_eye").style.display="inline";
  document.getElementById("show_eye").style.display="none";
}
function signup(){
  document.getElementById("bigscreen-signup").style.display="block";
  document.getElementById("bigscreen-login").style.display="none";
  document.getElementById("advert").style.display="none";
}
function signup_hideeye(){
  document.getElementById('passwod').type ='text';
  document.getElementById("signup_showeye").style.display="inline";
  document.getElementById("signup_hideeye").style.display="none";
}
function signup_showeye(){
  document.getElementById('passwod').type ='password';
  document.getElementById("signup_hideeye").style.display="inline";
  document.getElementById("signup_showeye").style.display="none";
}
function hidesign_up(){
  document.getElementById("bigscreen-signup").style.display="none";
  document.getElementById("bigscreen-login").style.display="block";
  document.getElementById("advert").style.display="block";
}
function show_password(){
  document.getElementById("small_screen_password").type="text";
  document.getElementById("hide_password").style.display="inline";
  document.getElementById("show_password").style.display="none";
}
function hide_password(){
  document.getElementById("small_screen_password").type="password";
  document.getElementById("show_password").style.display="inline";
  document.getElementById("hide_password").style.display="none";
}

function show_registration_password(){
  document.getElementById("small_screen_registration_password").type="text";
  document.getElementById("hide_registration_password").style.display="inline";
  document.getElementById("show_registration_password").style.display="none";
}
function hide_registration_password(){
  document.getElementById("small_screen_registration_password").type="password";
  document.getElementById("show_registration_password").style.display="inline";
  document.getElementById("hide_registration_password").style.display="none";
}