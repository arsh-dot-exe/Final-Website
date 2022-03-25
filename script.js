const firebaseConfig = {
  apiKey: "AIzaSyC9s_hzLcJwxlm-CsOF0rrQ3H9xDu3hhvw",
  authDomain: "dd-find-culture-website.firebaseapp.com",
  databaseURL: "https://dd-find-culture-website-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "dd-find-culture-website",
  storageBucket: "dd-find-culture-website.appspot.com",
  messagingSenderId: "363929239376",
  appId: "1:363929239376:web:708eefe00d70123082f655",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// Initalize Variables
const auth = firebase.auth();
const database = firebase.database();

// Function to register first sign up page
function userRegister1() {
  const emailId = document.getElementById("emailId").value;
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const form = document.getElementById("SignInForm1");

  console.log(form.checkValidity());
  if (validatePassword() && password.length >= 6) {
    auth
      .createUserWithEmailAndPassword(emailId, password)
      .then(() => {
        console.log("creating user");
        var user = auth.currentUser;

        // Referance to Database
        var db_ref = database.ref();

        // Create user data
        var user_data = {
          email: email,
          username: username,
        };

        db_ref.child("users/" + user.uid).set(user_data);
      })
      .catch((error) => {
        var error_code = error.code;
        var error_message = error.message;

        alert(error_message);
      });
  }
}
// Functions to validate password and confirm password in Sign Up Page
function validatePassword() {
  password = document.getElementById("password").value;
  confirmPassword = document.getElementById("confirm_password").value;
  match__div = document.getElementById("match__div");

  if (password == confirmPassword && password.length >= 6) {
    match__div.style.visibility = "hidden";
    return true;
  } else {
    match__div.style.visibility = "visible";
    return false;
  }
}

function goBack() {
  window.location.href = "http://127.0.0.1:5500/Sign%20Up%20Page/Sign%20Up%201.html";
}
