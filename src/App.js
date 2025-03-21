import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Navigation from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeatureSection from './components/FeatureSection';
import FeaturesGrid from './components/FeaturesGrid';
import StepsSection from './components/StepsSection';
import TradingSection from './components/TradingSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import LoginModal from './components/LoginModal';
import SignupModal from './components/SignupModal';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { useEffect } from "react";

const AppContent = () => {
  const { 
    showLoginModal, 
    showSignupModal, 
    closeAllModals, 
    openLoginModal, 
    openSignupModal 
  } = useAuth();

  return (
    <div className="app-container">
      <Navigation />
      <HeroSection />
      <FeatureSection />
      <FeaturesGrid />
      <StepsSection />
      <TradingSection />
      <FaqSection />
      <Footer />
      
      <LoginModal 
        show={showLoginModal} 
        handleClose={closeAllModals} 
        handleShowSignup={openSignupModal} 
      />
      
      <SignupModal 
        show={showSignupModal} 
        handleClose={closeAllModals} 
        handleShowLogin={openLoginModal} 
      />
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
  useEffect(() => {
    document.title = "Finance Dashboard";
  }, []);
}

export default App;