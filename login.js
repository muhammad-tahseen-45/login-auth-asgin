var firebaseConfig = {
    apiKey: "AIzaSyB1Sysb-edgg49u6rrxRY6d0d0VS71-gWU",
    authDomain: "authenticationforweb-f8dc7.firebaseapp.com",
    projectId: "authenticationforweb-f8dc7",
    storageBucket: "authenticationforweb-f8dc7.appspot.com",
    messagingSenderId: "278720689972",
    appId: "1:278720689972:web:7c005e2c0368da0ea01761",
    measurementId: "G-E1MM1DKNG9"
  };


  // Initialize Firebase
var app = firebase.initializeApp(firebaseConfig);

// ****************** regestration******

function regester() {

  var email = document.getElementById("email")
  var password= document.getElementById("password")
  // console.log(email.value,password.value)
  firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
      // Signed in 
      var user = userCredential.user;
      console.log(user)
      alert("your are regesterd")
      firebase.auth().currentUser.sendEmailVerification()
      .then(() => {
        console.log("send verification email")
        // ...
      });
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage)
    });


}

// **************** login*************

function log() {
    var email = document.getElementById("email")
    var password = document.getElementById("password")
    // console.log(email.value,password.value)
    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        console.log(user)
        alert("your are login")
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage)
      });
  
  }


  // *********** gogal sginin ************
  function googlesgin(){
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;
   console.log(user)
   alert("you are login with google")
      // ...
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage)
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });

  }