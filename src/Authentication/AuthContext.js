import React, { useState, useEffect, createContext } from "react"
import { auth } from "../firebase"
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";


export const AuthContext = createContext();



export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

 
  const provider = new GoogleAuthProvider();
 
  function SignInWithGoogle () {
        return signInWithPopup(auth, provider);
  }

  function logout() {
    return auth.signOut();
  }
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
      setLoading(false);
    })

    return unsubscribe
  }, [])

 const value = {
    SignInWithGoogle,
    logout,
    currentUser

 }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}