// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-analytics.js";
  import {getAuth, CreateUserWithEmailAndPassword, SignInEmailAndPassword} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-Auth.js"
  
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyA5A41UESbVho-uWs41Fm12FAlAq1hWn78",
    authDomain: "new-web-dev-project.firebaseapp.com",
    projectId: "new-web-dev-project",
    storageBucket: "new-web-dev-project.firebasestorage.app",
    messagingSenderId: "858845409212",
    appId: "1:858845409212:web:8b07adb96e3e86065445b9",
    measurementId: "G-5GHD7GZTZ5"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);


  

const form= document.getElementById(Form)
const name_input= document.getElementById(name-input)
const email_input= document.getElementById(email-input)
const category_input= document.getElementById(category-input)
const password_input= document.getElementById(password-input)
const error_message = document.getElementById(error-message)

form.addEventListener('submit', (e) =>{
e.preventDefault()
})

let errors = []

if (name_input){
    errors = getsignupFormErrors(name_input.value, email_input.value, category_input.value, password_input.value)
}
else
error = getsignupFormErrors(email_input.value, password_input.value)

if (errors.length > 0){
    e.preventDefault()
    error_message,innerText = errors.join(".")
}

function getsignupFormErrors (name, password, category){
    let error = []

    if(name === ''|| name == null){
        error.push('name is required')
        name_input.ParentElement.classlist.add('incorrect')
    }
    if(email === ''|| email == null){
        error.push('email is required')
        email_input.ParentElement.classlist.add('incorrect')
    }
    if(password === ''|| password == null){
        error.push('password is required')
        password_input.ParentElement.classlist.add('incorrect')
    }
    return errors;
}