import React, {useContext, useEffect, useState} from 'react';
import {auth} from '../firebase.js';
const AuthContext = React.createContext();
export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({children}) {
  const [currentUser, setCurrentUser] = useState('');
  const [loading, setLoading] = useState(true);
  const [isLogged, setLog] = useState('');
  function signup(email, password) {
    setLog(true);
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function login(email, password) {
    setLog(true);
    return auth.signInWithEmailAndPassword(email, password);
  }

  function logout() {
    setLog(false);
    return auth.signOut();
  }
  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email);
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email);
  }
  function updatePassword(password) {
    return currentUser.updatePassword(password);
  }
  function isOnline() {
    if (currentUser !== null) {
      setLog(true);
    }
  }
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
    isLogged,
    isOnline,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
