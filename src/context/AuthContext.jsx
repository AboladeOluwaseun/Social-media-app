import { useContext, createContext, useState } from "react";
import { auth } from '../../firbaseconfig'
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";


const AuthContext = createContext();
export const useAuth = () => {
  return useContext(AuthContext);
};

const provider = new GoogleAuthProvider();

export const AuthContextProvider = ({ children }) => {
  const signUpHandler =(email, password)=>{
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user.email)
    })
    .catch((error) => {
      const errorCode = error.code;
      console.log(errorCode)
      const errorMessage = error.message;
      // .. 
    });
  } 

  const googleSignIn=()=>{
    signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
  }

  const value = {
    signUpHandler,
    googleSignIn,
    
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
