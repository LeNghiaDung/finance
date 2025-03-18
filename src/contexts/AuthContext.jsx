import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);

  const openLoginModal = () => {
    setShowLoginModal(true);
    setShowSignupModal(false);
  };

  const openSignupModal = () => {
    setShowSignupModal(true);
    setShowLoginModal(false);
  };

  const closeAllModals = () => {
    setShowLoginModal(false);
    setShowSignupModal(false);
  };

  return (
    <AuthContext.Provider 
      value={{ 
        showLoginModal, 
        showSignupModal, 
        openLoginModal, 
        openSignupModal, 
        closeAllModals 
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext); 