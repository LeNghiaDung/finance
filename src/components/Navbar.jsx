import React from 'react';
import { Navbar, Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuth } from '../contexts/AuthContext';

const Navigation = () => {
  const { openLoginModal, openSignupModal } = useAuth();
  
  return (
    <Navbar expand="lg" className="py-3 navbar-dark">
      <Container className="navbar-container">
        <Navbar.Brand href="#home" className="navbar-logo">
          <img
            src="/finantex-logo.png"
            alt="FinanTex Logo"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <div className="auth-buttons">
          <Button variant="warning" className="auth-btn signup-btn me-2" onClick={openSignupModal}>
            Đăng ký
          </Button>
          <Button variant="outline-light" className="auth-btn login-btn" onClick={openLoginModal}>
            Đăng nhập
          </Button>
        </div>
      </Container>
    </Navbar>
  );
};

export default Navigation;