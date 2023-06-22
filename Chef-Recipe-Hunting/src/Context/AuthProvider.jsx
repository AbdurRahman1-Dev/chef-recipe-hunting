import React, { createContext, useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged,signOut,GithubAuthProvider, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import app from '../utils/firebase.config';


export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const auth = getAuth(app);


const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true);

// google authentication part start---------
  const signInWithGoogle = () => {
    setLoading(true);
      return signInWithPopup(auth, googleProvider)
  }

const googleSignOut = () => {
  return signOut(auth)
}

// google authentication part end--------- 




// github authentication part start---------
const signInWithGithub = () => {
  setLoading(true);
  return signInWithPopup(auth, githubProvider)
}
// github authentication part end---------




// email password authentication part start---------

const signUpWithEmail = (email, password) => {
  setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
}

const signInWithEmail = (email, password) => {
  setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
}

// email password authentication part end---------



  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, loggedUser => {
        setUser(loggedUser);
        setLoading(false);
    })

    return () => {
        unsubscribe();
    }
}, [])

  const authInfo = {
    user,
    loading,
    signInWithGoogle,
    googleSignOut,
    signInWithGithub,
    signUpWithEmail,
    signInWithEmail
}

  return (
    <AuthContext.Provider value={authInfo}>
            {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;