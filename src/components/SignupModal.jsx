"use client"
import { useState, useEffect } from "react"
import { FaTimes, FaEye, FaEyeSlash } from "react-icons/fa"

const SignupModal = ({ show, handleClose, handleShowLogin }) => {
  const [showPassword, setShowPassword] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  // Ngăn cuộn trang khi modal hiển thị
  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [show])

  return (
    <div 
      className={`signup-dialog ${show ? 'show' : ''}`}
      role="dialog"
      aria-modal="true"
    >
      <div className="signup-dialog-content">
        <div className="signup-dialog-header">
          <div className="signup-dialog-logo">
            <img src="/finantex-logo.png" alt="FinanTex Logo" />
          </div>
          <button className="signup-dialog-close" onClick={handleClose}>
            <FaTimes />
          </button>
        </div>
        
        <div className="signup-dialog-body">
          <h2 className="signup-dialog-title">Tạo tài khoản FinanTex</h2>
          
          <form className="signup-form">
            <div className="signup-form-group">
              <label className="signup-form-label">
                Địa chỉ Email <span className="required">*</span>
              </label>
              <input 
                type="email" 
                placeholder="Điền Email..." 
                className="signup-form-input signup-form-input-special"
              />
            </div>
            
            <div className="signup-form-group">
              <label className="signup-form-label">
                Biệt danh <span className="required">*</span>
              </label>
              <input 
                type="text" 
                placeholder="Điền Nickname..." 
                className="signup-form-input"
              />
            </div>
            
            <div className="signup-form-group">
              <label className="signup-form-label">
                Mật khẩu <span className="required">*</span>
              </label>
              <div className="signup-password-toggle">
                <input 
                  type={showPassword ? "text" : "password"} 
                  placeholder="Điền mật khẩu..." 
                  className="signup-form-input"
                />
                <span 
                  className="password-toggle-icon" 
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </div>
            
            <div className="signup-form-group">
              <label className="signup-form-label">Mã giới thiệu</label>
              <input 
                type="text" 
                placeholder="Điền Mã giới thiệu..." 
                className="signup-form-input"
              />
            </div>
            
            <button type="submit" className="signup-submit-btn">
              Đăng ký
            </button>
            
            <div className="signup-footer">
              <span>Có tài khoản FinanTex? </span>
              <a 
                href="#" 
                className="signup-login-link"
                onClick={(e) => {
                  e.preventDefault()
                  handleShowLogin()
                }}
              >
                Đăng nhập vào Tài khoản của bạn
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignupModal
