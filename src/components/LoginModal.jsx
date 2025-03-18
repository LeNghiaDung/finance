import React from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { FaTimes } from 'react-icons/fa';

const LoginModal = ({ show, handleClose, handleShowSignup }) => {
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
            <h2 className="login-modal-title">Đăng nhập vào Tài khoản của bạn</h2>
            
            <Form className="login-form">
              <Form.Group className="mb-3">
                <Form.Label>Địa chỉ Email <span className="text-danger">*</span></Form.Label>
                <Form.Control 
                  type="email" 
                  placeholder="Điền Email..." 
                  className="login-form-input"
                />
              </Form.Group>
              
              <Form.Group className="mb-4">
                <Form.Label>Mật khẩu <span className="text-danger">*</span></Form.Label>
                <Form.Control 
                  type="password" 
                  placeholder="Điền mật khẩu..." 
                  className="login-form-input"
                />
              </Form.Group>
              
              <Button variant="warning" className="login-submit-btn w-100" type="submit">
                Đăng nhập
              </Button>
              
              <div className="login-options mt-3">
                <div className="login-remember">
                  <Button 
                    variant="link" 
                    className="login-forgot-link p-0 text-start"
                    onClick={handleShowSignup}
                  >
                    Cần tài khoản?
                  </Button>
                </div>
                <Button 
                  variant="link" 
                  className="login-forgot-link"
                >
                  Không nhớ mật khẩu?
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default LoginModal; 