import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  RecaptchaVerifier,
  signInWithPhoneNumber,
  FacebookAuthProvider
} from "firebase/auth";
import { auth } from "../firebase/firebase";

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [user, setCurrentUser] = useState({});

  function LogIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function SignUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function LogOut() {
    return signOut(auth);
  }

  function faceBookSignIn(){
      const facebookProvider = new FacebookAuthProvider()
      return signInWithPopup(auth, facebookProvider)

  }
  function GoogleSignIn() {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
  }

  function SetUpRecaptcha(number){
    const reCaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {},
      auth
    );
    reCaptchaVerifier.render();
    return signInWithPhoneNumber(auth, number, reCaptchaVerifier)
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      console.log("Auth", currentuser);
      setCurrentUser(currentuser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <userAuthContext.Provider
      value={{ user, LogIn, SignUp, LogOut, GoogleSignIn, SetUpRecaptcha, faceBookSignIn }}
    >
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}
