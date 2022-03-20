const firebaseConfig = {
  apiKey: "AIzaSyC9s_hzLcJwxlm-CsOF0rrQ3H9xDu3hhvw",
  authDomain: "dd-find-culture-website.firebaseapp.com",
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
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirm_password");
}

// Functions to validate password and confirm password in Sign Up Page
function validatePassword() {
  password = document.getElementById("password");
  confirmPassword = document.getElementById("confirm_password");

  if (password.value != confirmPassword.value) {
    confirmPassword.setCustomValidity("Passwords Don't Match");
  } else {
    confirmPassword.setCustomValidity("");
  }
}

function userRegister2() {}

function userLogin() {
  email = document.getElementById("email__input").value;
  password = document.getElementById("password__input").value;

  console.log(email, password);
}
