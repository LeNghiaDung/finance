import React from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { FaTimes } from 'react-icons/fa';

const SignupModal = ({ show, handleClose, handleShowLogin }) => {
  return (
    <Modal 
      show={show} 
      onHide={handleClose}
      contentClassName="login-modal-content"
      dialogClassName={`login-modal-dialog ${show ? 'show' : ''}`}
    >
      <Modal.Body className="p-0">
        <div className="login-modal-container">
          <div className="login-modal-header">
            <div className="login-modal-logo">
              <img src="/finantex-logo.png" alt="FinanTex Logo" />
            </div>
            <button className="login-modal-close" onClick={handleClose}>
              <FaTimes />
            </button>
          </div>
          
          <div className="login-modal-body">
            <h2 className="login-modal-title">Đăng ký Tài khoản</h2>
            
            <Form className="login-form">
              <Form.Group className="mb-3">
                <Form.Label>Họ tên <span className="text-danger">*</span></Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Nhập họ tên..." 
                  className="login-form-input"
                />
              </Form.Group>
              
              <Form.Group className="mb-3">
                <Form.Label>Địa chỉ Email <span className="text-danger">*</span></Form.Label>
                <Form.Control 
                  type="email" 
                  placeholder="Nhập Email..." 
                  className="login-form-input"
                />
              </Form.Group>
              
              <Form.Group className="mb-3">
                <Form.Label>Mật khẩu <span className="text-danger">*</span></Form.Label>
                <Form.Control 
                  type="password" 
                  placeholder="Tạo mật khẩu..." 
                  className="login-form-input"
                />
              </Form.Group>
              
              <Form.Group className="mb-4">
                <Form.Label>Xác nhận mật khẩu <span className="text-danger">*</span></Form.Label>
                <Form.Control 
                  type="password" 
                  placeholder="Nhập lại mật khẩu..." 
                  className="login-form-input"
                />
              </Form.Group>
              
              <Button variant="warning" className="login-submit-btn w-100" type="submit">
                Đăng ký
              </Button>
              
              <div className="login-options mt-3">
                <div className="login-remember">
                  <Form.Check 
                    type="checkbox" 
                    id="agree-terms"
                    label="Tôi đồng ý với điều khoản sử dụng" 
                    className="login-check-text"
                  />
                </div>
                <Button 
                  variant="link" 
                  className="login-forgot-link"
                  onClick={handleShowLogin}
                >
                  Đã có tài khoản?
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default SignupModal; 