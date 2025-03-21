import React, { useState, useEffect } from 'react';
import { Navbar, Container, Button } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';

const Navigation = () => {
  const { openLoginModal, openSignupModal } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Hàm xử lý sự kiện cuộn
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };
  
  // Thêm event listener khi component được mount
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    // Kiểm tra ngay khi trang tải xong
    handleScroll();
    
    // Cleanup event listener khi component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <Navbar expand="lg" className={`navbar-dark fixed-top ${isScrolled ? 'scrolled' : ''}`}>
      <Container className="navbar-container">
        <Navbar.Brand href="#home" className="navbar-logo">
          <img
            src="./finantex-logo.png"
            alt="FinanTex Logo"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <div className="auth-buttons">
          <Button variant="warning" className="auth-btn signup-btn" onClick={openSignupModal}>
            Đăng Ký
          </Button>
          <Button variant="outline-light" className="auth-btn login-btn" onClick={openLoginModal}>
            Đăng Nhập
          </Button>
        </div>
      </Container>
    </Navbar>
  );
};

export default Navigation;