import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider , signInWithEmailAndPassword, signInWithEmailLink, signInWithPopup} from 'firebase/auth';
const firebaseConfig = {
 // Add your key here
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();

export const signInWithGoogle = () =>{
signInWithPopup(auth,provider)
.then((result)=>{
  console.log(result);
console.log(result);
const name = result.user.displayName;
const email = result.user.email;
const profilePic = result.user.photoURL;
const phone = result.user.phoneNumber;
const AccountCreation = result.user.metadata.creationTime;
const emailVerified = result.user.emailVerified;

localStorage.setItem("name", name);
localStorage.setItem("email",email);
localStorage.setItem("photo" , profilePic);
localStorage.setItem("phone" , phone);
localStorage.setItem("AccountCreation" , AccountCreation);
localStorage.setItem("AccountCreation" , AccountCreation);
localStorage.setItem("EmailVerification" , emailVerified);
}).catch((err)=>{
    alert('Error Signing in ')
})
}

